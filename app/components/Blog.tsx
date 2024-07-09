import React from 'react';

interface BlogPost {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    imageUrl: '/tasting.jpg',
    date: 'June 2024',
    title: 'Wine Tasting Event 2024',
    description: 'Join us for an exclusive wine tasting event where you can savor the finest wines from around the world. Experience the rich flavors and aromas...'
  },
  {
    id: 2,
    imageUrl: '/festival.jpg',
    date: 'June 2024',
    title: 'Craft Beer Festival 2024',
    description: 'Celebrate the art of brewing at the Craft Beer Festival 2024. Sample unique brews, meet the brewers, and enjoy live music in a vibrant atmosphere...'
  },
  {
    id: 3,
    imageUrl: '/mixology.jpg',
    date: 'May 2024',
    title: 'Cocktail Masterclass',
    description: 'Learn the secrets of mixology in our Cocktail Masterclass. Our expert bartenders will guide you through the creation of classic and contemporary cocktails...'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto max-w-screen-xl py-12 px-4">
      <h2 className="text-2xl text-gray-600 font-bold mb-8">Latest Journals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
