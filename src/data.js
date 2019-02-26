import Faker from 'faker';

function createPost(isGuest = false) {
  return {
    id: Faker.random.uuid(),
    title: Faker.random.words(2),
    author: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    excerpt: Faker.lorem.words(60),
  };
}

export const posts = [
  createPost(),
  createPost(),
  createPost(),
  createPost(),
  createPost(),
  createPost(),
];