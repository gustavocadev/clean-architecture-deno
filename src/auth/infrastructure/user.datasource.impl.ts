import { UserDatasource } from '../domain/user.datasource.ts';
import { UserEntity } from '../domain/user.entity.ts';

// here we can already use out models from our db
export class UserDatasourceImpl implements UserDatasource {
  findUserByIdImpl(uuid: string): Promise<UserEntity | null> {
    throw new Error('Method not implemented.');
  }
  registerUserImpl(user: UserEntity): Promise<UserEntity | null> {
    throw new Error('Method not implemented.');
  }
  listUserImpl(): Promise<UserEntity[] | null> {
    throw new Error('Method not implemented.');
  }
}
