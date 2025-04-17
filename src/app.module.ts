import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PersonModule } from './Person ----/person.module';
import { InstitutionModule } from './Institution ----/institution.module';
import { CourseModule } from './Course/course.module';
import { ForumPostModule } from './Forum-Post/forum-post.module';
import { MembershipModule } from './MemberShip/membership.module';
import { StudentCourseModule } from './Student-Course/student-course.module';
import { TaskModule } from './Task/task.module';
import { TaskSubmissionModule } from './Task-Submission/task-submission.module';
import { UserMembershipModule } from './UserMembership/userMembership.module';
import { SubmissionModule } from './Submission/submission.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '8080'),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: process.env.APP_ENVIRONMENT !== 'production',
      logging: process.env.APP_ENVIRONMENT !== 'production' ? ['query', 'error'] : [],
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: ({ req }) => ({ request: req }),
  
}),
    UserModule, PersonModule, InstitutionModule, CourseModule, ForumPostModule, MembershipModule, StudentCourseModule, TaskModule, TaskSubmissionModule, UserMembershipModule, SubmissionModule], // Importar el módulo de usuarios
  providers: []
})
export class AppModule {}
