export default {
  width: 300,
  group: 'shout',
  reverse: false,
  position: ['top', 'right'],
  classes: 'vue-shout',
  speed: 300,
  duration: 3000,
  delay: 0,
  max: Infinity,
  ignoreDuplicates: false,
  closeOnClick: true,
  triggerOnHidden: false,
  sync: false,
  queue: false,
  velocityAnimation: {
    enter: (el) => {
      const height = el.clientHeight;
      return {
        height: [height, 0],
        opacity: [1, 0],
      };
    },
    leave: {
      height: 0,
      opacity: [0, 1],
    },
  },
};
