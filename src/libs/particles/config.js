export const config = (color = '#2F3244') => ({
  background: {
    color: {
      value: '#fffff',
    },
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: false,
      },
    },
    size: {
      value: 5,
      random: true,
    },
    color: {
      value: color,
    },
    move: {
      enable: true,
      direction: 'none',
      outMode: 'out',
      speed: 0.3,
    },
    //   move: {
    //     enable: true,
    //     speed: 1,
    //     direction: "none",
    //     random: false,
    //     straight: false,
    //     out_mode: "out",
    //     bounce: false,
    //     attract: {
    //       enable: false,
    //       rotateX: 600,
    //       rotateY: 1200
    //     }
    //   }
    // },
    links: {
      enable: false,
    },
  },
  detectRetina: true,
})
