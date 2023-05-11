import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Part = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
      <div className="content" style={{ position: "relative", zIndex: 1 }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: "rgb(10,10,25)",
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: ["#00ffd0", "#fe2020", "#50E3C2", "#FFD300", "#E86363"],
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#b6b2b2",
                },
              },
              opacity: {
                value: 0.7,
                random: false,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 8.017060304327615,
                random: true,
                animation: {
                  enable: true,
                  speed: 12.181158184520175,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              lineLinked: {
                enable: false,
                distance: 150,
                color: "#c8c8c8",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outMode: "bounce",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detectOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "connect",
                },
                onClick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                connect: {},
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
};
export default Part;
