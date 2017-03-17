import { Book } from './book.model';

export class BooksService {
    private books: Book[] = [
    {
      id: 1,
      title: 'Angular in Action',
      description: 'When developers move beyond building simple web sites or small applications, things get complicated. Managing data gets messy, handling browser incompatibilities takes time, juggling competing user interactions and integrating the work of multiple developers gets tricky. The Angular 2 framework handles these common problems, making it ideal for writing large-scale web applications that can be maintained, extended, and tested. Because it\'s popular, it offers a well-supported code base, vibrant community, and rich ecosystem. Best of all, Angular 2 emphasizes performance and focuses on mobile apps by being compact and memory efficient.',
      rating: 5
    },
    {
      id: 2,
      title: 'Leaders Eat Last',
      description: 'The New York Times bestseller by the acclaimed, bestselling author of Start With Why and Together is Better. Now with a new chapter on leading millennials, based on Simon Sinek\'s viral video "The Millennial Question" (150+ million views). Imagine a world where almost everyone wakes up inspired to go to work, feels trusted and valued during the day, then returns home feeling fulfilled. This is not a crazy, idealized notion. Today, in many successful organizations, great leaders create environments in which people naturally work together to do remarkable things. In his work with organizations around the world, Simon Sinek noticed that some teams trust each other so deeply that they would literally put their lives on the line for each other. Other teams, no matter what incentives are offered, are doomed to infighting, fragmentation and failure. Why? The answer became clear during a conversation with a Marine Corps general. "Officers eat last," he said. Sinek watched as the most junior Marines ate first while the most senior Marines took their place at the back of the line. What\'s symbolic in the chow hall is deadly serious on the battlefield: Great leaders sacrifice their own comfort--even their own survival--for the good of those in their care. Too many workplaces are driven by cynicism, paranoia, and self-interest. But the best ones foster trust and cooperation because their leaders build what Sinek calls a "Circle of Safety" that separates the security inside the team from the challenges outside.',
      rating: 5
    },
    {
      id: 3,
      title: 'MongoDB The Guide',
      description: 'Manage the huMONGOus amount of data collected through your web application with MongoDB. This authoritative introduction—written by a core contributor to the project—shows you the many advantages of using document-oriented databases, and demonstrates how this reliable, high-performance system allows for almost infinite horizontal scalability. This updated second edition provides guidance for database developers, advanced configuration for system administrators, and an overview of the concepts and use cases for other people on your project. Ideal for NoSQL newcomers and experienced MongoDB users alike, this guide provides numerous real-world schema design examples.',
      rating: 4
    },
    {
      id: 4,
      title: 'Don\'t Make Me Think',
      description: 'Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject.Now Steve returns with fresh perspective to reexamine the principles that made Don’t Make Me Think a classic–with updated examples and a new chapter on mobile usability. And it’s still short, profusely illustrated…and best of all–fun to read. If you’ve read it before, you’ll rediscover what made Don’t Make Me Think so essential to Web designers and developers around the world. If you’ve never read it, you’ll see why so many people have said it should be required reading for anyone working on Web sites.',
      rating: 5
    },
    {
      id: 5,
      title: 'Start with Why',
      description: 'The inspiring, life-changing bestseller by the author of LEADERS EAT LAST and TOGETHER IS BETTER. In 2009, Simon Sinek started a movement to help people become more inspired at work, and in turn inspire their colleagues and customers. Since then, millions have been touched by the power of his ideas, including more than 28 million who’ve watched his TED Talk based on START WITH WHY -- the third most popular TED video of all time. Sinek starts with a fundamental question: Why are some people and organizations more innovative, more influential, and more profitable than others? Why do some command greater loyalty from customers and employees alike? Even among the successful, why are so few able to repeat their success over and over? People like Martin Luther King Jr., Steve Jobs, and the Wright Brothers had little in common, but they all started with WHY. They realized that people won\'t truly buy into a product, service, movement, or idea until they understand the WHY behind it. START WITH WHY shows that the leaders who\'ve had the greatest influence in the world all think, act, and communicate the same way -- and it\'s the opposite of what everyone else does. Sinek calls this powerful idea The Golden Circle, and it provides a framework upon which organizations can be built, movements can be led, and people can be inspired. And it all starts with WHY.',
      rating: 5
    },
    
  ];

  getBooks(){
    return this.books;
  }
}