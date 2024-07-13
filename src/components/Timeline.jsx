import { useEffect, useRef } from 'react';
import '../styles/Timeline.css';

export default function Timeline() {
  const timelineRef = useRef(null);
  const timelineLineRef = useRef(null);
  const timelineLineProgressRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      fnOnScroll();
    };

    const handleResize = () => {
      fnOnResize();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    const agTimeline = timelineRef.current;
    const agTimelineLine = timelineLineRef.current;
    const agTimelineLineProgress = timelineLineProgressRef.current;
    const agTimelineItems = timelineItemsRef.current;
    const agOuterHeight = window.outerHeight;
    let agHeight = window.innerHeight;
    let agPosY = window.scrollY;
    let f = -1;
    let agFlag = false;

    const fnOnScroll = () => {
      agPosY = window.scrollY;
      fnUpdateFrame();
    };

    const fnOnResize = () => {
      agPosY = window.scrollY;
      agHeight = window.innerHeight;
      fnUpdateFrame();
    };

    const fnUpdateWindow = () => {
      agFlag = false;

      const firstItemPoint = agTimelineItems[0].querySelector('.ag-timeline-card_point-box');
      const lastItemPoint = agTimelineItems[agTimelineItems.length - 1].querySelector('.ag-timeline-card_point-box');
      
      agTimelineLine.style.top = `${firstItemPoint.getBoundingClientRect().top - agTimelineItems[0].getBoundingClientRect().top}px`;
      agTimelineLine.style.bottom = `${agTimeline.getBoundingClientRect().top + agTimeline.offsetHeight - lastItemPoint.getBoundingClientRect().top}px`;

      if (f !== agPosY) {
        f = agPosY;
        fnUpdateProgress();
      }
    };

    const fnUpdateProgress = () => {
      const agTop = agTimelineItems[agTimelineItems.length - 1].querySelector('.ag-timeline-card_point-box').getBoundingClientRect().top;
      const i = agTop + agPosY - window.scrollY;
      const a = agTimelineLineProgress.getBoundingClientRect().top + agPosY - window.scrollY;
      let n = agPosY - a + agOuterHeight / 2;
      if (i <= agPosY + agOuterHeight / 2) {
        n = i - a;
      }
      agTimelineLineProgress.style.height = `${n}px`;

      agTimelineItems.forEach((item) => {
        const agTop = item.querySelector('.ag-timeline-card_point-box').getBoundingClientRect().top;
        if (agTop + agPosY - window.scrollY < agPosY + 0.5 * agOuterHeight) {
          item.classList.add('js-ag-active');
        } else {
          item.classList.remove('js-ag-active');
        }
      });
    };

    const fnUpdateFrame = () => {
      if (!agFlag) {
        requestAnimationFrame(fnUpdateWindow);
      }
      agFlag = true;
    };

    fnUpdateFrame(); // Initialize the frame update on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const timelineItems = [
    {
      year: "2021",
      season: "Season 13",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-13.png",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    },
    {
      year: "2020",
      season: "Season 12",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png",
      description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
    },
    {
      year: "2020",
      season: "Season 11",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-11.png",
      description: "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.",
    },
    {
      year: "2019",
      season: "Season 10",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-10.png",
      description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    },
    {
      year: "2019",
      season: "Season 9",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-9.png",
      description: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
    },
    {
      year: "2018",
      season: "Season 8",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-8.png",
      description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    },
    {
      year: "2018",
      season: "Season 7",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-7.png",
      description: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.",
    },
    {
      year: "2017",
      season: "Season 6",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-6.png",
      description: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    },
    {
      year: "2017",
      season: "Season 5",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-5.png",
      description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
    },
    {
      year: "2016",
      season: "Season 4",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-4.png",
      description: "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
    },
    {
      year: "2016",
      season: "Season 3",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-3.png",
      description: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.",
    },
    {
      year: "2015",
      season: "Season 2",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-2.png",
      description: "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
    },
    {
      year: "2015",
      season: "Season 1",
      imgSrc: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-1.png",
      description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    },
  ];

  return (
    <div className="ag-timeline-block">
      <div className="ag-timeline_title-box">
        <div className="ag-timeline_tagline">Development</div>
        <div className="ag-timeline_title">Timeline</div>
      </div>
      <section className="ag-section">
        <div className="ag-format-container" ref={timelineRef}>
          <div className="js-timeline ag-timeline">
            <div className="js-timeline_line ag-timeline_line" ref={timelineLineRef}>
              <div className="js-timeline_line-progress ag-timeline_line-progress" ref={timelineLineProgressRef}></div>
            </div>
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="js-timeline_item ag-timeline_item"
                ref={(el) => (timelineItemsRef.current[index] = el)}
              >
                <div className="ag-timeline-card_box">
                  <div className="ag-timeline-card_meta-box">
                    <div className="ag-timeline-card_meta">{item.year}</div>
                    <div className="ag-timeline-card_submeta">{item.season}</div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img src={item.imgSrc} className="ag-timeline-card_img" alt="Season" />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_desc">{item.description}</div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                  <div className="ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">{index + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

