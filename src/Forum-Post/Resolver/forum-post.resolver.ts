import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ForumPostModel } from '../Model/forum-post.model';
import { ForumPostService } from '../Service/forum-post.service';
import { CreateForumPostInput } from '../Model/forum-post.input';


@Resolver(() => ForumPostModel)
export class ForumPostResolver {
  constructor(private readonly forumPostService: ForumPostService) {}

  @Mutation(() => ForumPostModel)
  async createForumPost(
    @Args('input') input: CreateForumPostInput,
  ): Promise<ForumPostModel> {
    return this.forumPostService.create(input);
  }

  @Query(() => [ForumPostModel])
  async forumPosts(): Promise<ForumPostModel[]> {
    return this.forumPostService.findAll();
  }

  @Query(() => ForumPostModel)
  async forumPost(@Args('id') id: string): Promise<ForumPostModel> {
    return this.forumPostService.findOne(id);
  }

  @Mutation(() => Boolean)
  async removeForumPost(@Args('id') id: string): Promise<boolean> {
    return this.forumPostService.remove(id);
  }
}
