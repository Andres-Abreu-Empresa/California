import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForumPostEntity } from '../Entity/forum-post.entity';

import { CourseEntity } from 'src/Course/Entity/course.entity';
import { UserEntity } from 'src/User/Entity/user.entity';
import { CreateForumPostInput } from '../Model/forum-post.input';

@Injectable()
export class ForumPostService {
  constructor(
    @InjectRepository(ForumPostEntity)
    private forumPostRepo: Repository<ForumPostEntity>,

    @InjectRepository(CourseEntity)
    private courseRepo: Repository<CourseEntity>,

    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async create(input: CreateForumPostInput): Promise<ForumPostEntity> {
    const course = await this.courseRepo.findOne({
      where: { id: input.courseId },
    });
  
    if (!course) {
      throw new NotFoundException('Course not found');
    }
  
    const user = await this.userRepo.findOne({
      where: { id: input.userId },
    });
  
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    let parent: ForumPostEntity | undefined = undefined;

    if (input.parentId) {
      const foundParent = await this.forumPostRepo.findOne({
        where: { id: input.parentId },
      });
  
      if (!foundParent) {
        throw new NotFoundException('Parent post not found');
      }
  
      parent = foundParent; // `parent` nunca será null
    }

  
    const newPost = this.forumPostRepo.create({
      content: input.content,
      course,
      user,
      parent, // si no hay parent, es undefined, no null
    });
  
    return await this.forumPostRepo.save(newPost);
  }
  

  async findAll(): Promise<ForumPostEntity[]> {
    return this.forumPostRepo.find({ relations: ['course', 'user', 'parent', 'replies'] });
  }

  async findOne(id: string): Promise<ForumPostEntity> {
    const post = await this.forumPostRepo.findOne({
      where: { id },
      relations: ['course', 'user', 'parent', 'replies'],
    });

    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.forumPostRepo.delete(id);
    return !!result.affected;
  }
}
