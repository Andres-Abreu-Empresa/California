import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumPostEntity } from './Entity/forum-post.entity';
import { ForumPostService } from './Service/forum-post.service';
import { ForumPostResolver } from './Resolver/forum-post.resolver';
import { CourseEntity } from 'src/Course/Entity/course.entity';
import { UserEntity } from 'src/User/Entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ForumPostEntity, CourseEntity, UserEntity])],
  providers: [ForumPostService, ForumPostResolver],
})
export class ForumPostModule {}
