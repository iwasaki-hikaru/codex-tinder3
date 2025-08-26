import { prisma } from './src/client';

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'demo@example.com',
      password: 'password',
      profile: {
        create: {
          name: 'Demo User',
          age: 25,
          bio: 'This is a demo profile',
          photos: {
            create: [{ url: '/placeholder.jpg' }],
          },
        },
      },
      counter: {
        create: { superLikes: 5, boosts: 1 },
      },
    },
    include: { profile: { include: { photos: true } } },
  });
  console.log('Seeded user', user.email);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
