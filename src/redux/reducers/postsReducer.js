import PostImg1 from '../../assets/Posts/blog-img-1.jpg';
import PostImg2 from '../../assets/Posts/blog-img-1.jpg';
import PostImg3 from '../../assets/Posts/blog-img-1.jpg';

let initialState = {
  postsList: [
    {
      id: 1,
      name: 'Cow biltong pork belly kielbasa shankle',
      tag: 'xbox',
      date: 'mar 14, 2018',
      description:
        'Turducken cupim hamburger beef ribs picanha, drumstick buffalo tri-tip cow. Turducken prosciutto shank pork chop.',
      author: 'Admin',
      src: PostImg1,
    },
    {
      id: 2,
      name: 'Cow short ribs beef strip steak jowl',
      tag: 'ps 3',
      date: 'mar 18, 2018',
      description:
        'Capicola beef ribs pastrami biltong pork chop corned beef alcatra tail landjaeger. Spare ribs t-bone buffalo capicola, pork belly.',
      author: 'Admin',
      src: PostImg2,
    },
    {
      id: 3,
      name: 'boudin shankle pork belly turducken spare rib',
      tag: 'ps vita',
      date: 'mar 23, 2018',
      description:
        'Capicola chicken rump biltong boudin corned beef prosciutto short loin pork chop fatback flank beef porchetta tenderloin.',
      author: 'Admin',
      src: PostImg3,
    },
  ],
};

const postsReducer = (state = initialState, action) => {
  return state;
};

export default postsReducer;
