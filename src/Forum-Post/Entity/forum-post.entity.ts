import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { CourseEntity } from 'src/Course/Entity/course.entity';
import { UserEntity } from 'src/User/Entity/user.entity';
  
  @Entity('forumpost')
  export class ForumPostEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => CourseEntity, course => course.forumPosts)
    course: CourseEntity;
  
    @ManyToOne(() => UserEntity, user => user.posts)
    user: UserEntity;
  
    @ManyToOne(() => ForumPostEntity, post => post.replies, { nullable: true })
    parent: ForumPostEntity;
  
    @OneToMany(() => ForumPostEntity, post => post.parent)
    replies: ForumPostEntity[];
  
    @Column({ type: 'text' })
    content: string;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  