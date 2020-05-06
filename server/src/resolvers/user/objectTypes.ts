import { Field, ObjectType } from 'type-graphql'
import { User } from '~/orm/entity/User'

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string
  @Field(() => User)
  user: User
}
