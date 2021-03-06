'use strict'

const educationsEn = [{
    id: 2,
    company: "Technical University",
    period: "2003 - 2008",
    name: "Bachelor, Computer systems and technologies",
    description: "Training skilled professionals in the field of design, development, maintenance and usage of computer systems. Discrete mathematics, organisation of the computation process, microprocessor systems, computer architecture, operating systems, methods of information transfer, computer networks, programming, databases, information systems, programming environments, etc.",
    location: "Plovdiv, Bulgaria"
  },
  {
    id: 1,
    company: "Mechanical Technical School",
    period: "1998 - 2003",
    name: "Electronic Systems",
    description: "Electronic systems technology, electrical systems or related field.",
    location: "Pazardjik, Bulgaria"

  },
]

const worksEn = [{
    id: 9,
    company: "flatexDegiro",
    period: "March 2022 – present",
    name: "Frontend Developer",
    description: "Responsible for the coding of a website according to a company specifications. Software technologies and tools used: CSS, JavaScript, Typescript, React, Visual Studio Code",
    location: "Sofia, Bulgaria"
  },
  {
    id: 8,
    company: "Predistic Ltd",
    period: "January 2021 – February 2022",
    name: "Web Developer",
    description: "Responsible for the coding, design and layout of a website according to a company specifications. Software technologies and tools used: PHP, HTML5, CSS, JavaScript, ReactJS, Matirial UI, Visual Studio Code",
    location: "Sofia, Bulgaria"
  },
  {
    id: 7,
    company: "Predistic Ltd",
    period: "July 2020 – February 2022",
    name: "IoT Software Developer",
    description: "Develop and maintain framework for IoT develop. This includes WiFi connectivity, firmware updates, messaging services etc. Software technologies and tools used: PlatformIO, C++, Git, GitLab, Microsoft Office for documentation. Boards: ESP32/ESP8266",
    location: "Sofia, Bulgaria"
  },
  {
    id: 6,
    company: "Predistic Ltd",
    period: "December 2019 – July 2020",
    name: "Software Developer",
    description: "Responsible for developing and maintain specific animations. Working with Continental Automotive GmbH, Toyota project – 730B. Maintain, develop and document specific animations for the project. Software technologies and tools used: Microsoft visual studio 2013, C++, GreenHills, CanCase, Git, JIRA, Microsoft Office and DOORS for documentation.",
    location: "Sofia, Bulgaria"
  },
  {
    id: 5,
    company: "Predistic Ltd",
    period: "June 2019 – December 2019",
    name: "Functional Responsible",
    description: "Functional manager for a cluster function/module. I was responsible for the whole implementation of a customer function. Working with Continental Automotive GmbH, Daimler projects (BR213 HL / BR205Mopf-IC-EL / G463 HL/ VS30/VS11). The Function Responsible has a central position as the link between customer and SW development. The Function Responsible translates the SW customer requirements into practicable specifications and is responsible for the correct and in time implementation of the SW function(s). Software technologies and tools used: Microsoft visual studio 2013, C++, GreenHills, CanCase, Git, JIRA, Microsoft Excel, Microsoft Office and DOORS for documentation.",
    location: "Sofia, Bulgaria"
  },
  {
    id: 4,
    company: "Predistic Ltd",
    period: "July 2011 – June 2019",
    name: "Software Developer",
    description: "Development of software for the automotive industry for Continental Automotive GmbH. The project offers implementation of a platform from which depend multiple projects. Software technologies and tools used: Microsoft visual studio 2005,  Microsoft visual studio 2013, C++, C#(for internal tools), Some internal tools, CanCase, SVN,  TortoiseHg, Git, JIRA, Microsoft Excel, Microsoft Project, Microsoft Office for documentation.",
    location: "Sofia, Bulgaria / Babenhausen, Germany"
  },
  {
    id: 3,
    company: "Vereo Technologies",
    period: "December 2010 – July 2011",
    name: "Software Developer",
    description: "The project offers implementation of system for issuing, revoking and monitoring of licenses for acquisition, sale, transportation and manufacturing of weapons, explosives and pyrotechnics. The system is integrated with internal information systems of Ministry of Interior and provides mechanisms for statistical reports and printing of licenses issued on special forms. Software technologies and tools used: Oracle RDBMS 11g (HP UX), Oracle WebLogic 10.3.1 Application Server, Eclipse 3.4, JDK6.0, Struts, Ajax, EJB 2.1, Oracle Toplink 10.1.3.5, SVN, Microsoft Excel, Microsoft Project, Microsoft Office for documentation.",
    location: "Sofia, Bulgaria"
  },
  {
    id: 2,
    company: "Vereo Technologies",
    period: "September 2010 – December 2010",
    name: "Quality Assurance Specialist",
    description: "The project offers implementation of system for issuing, revoking and monitoring of licenses for acquisition, sale, transportation and manufacturing of weapons, explosives and pyrotechnics. The system is integrated with internal information systems of Ministry of Interior and provides mechanisms for statistical reports and printing of licenses issued on special forms.",
    location: "Sofia, Bulgaria"
  },
  {
    id: 1,
    company: "Johnson Controls Automotive",
    period: "June 2007 – June 2010",
    name: "R&D Engineer",
    description: "Development of software for the automotive industry. Test engineer for Daimler Chrysler Product Line (Mercedes Benz, Smart). Validation of embedded automotive software.Planning, preparation and execution of manual and automatic testcases. Software technologies and tools used: C, Internal scrip language for testing.",
    location: "Sofia, Bulgaria"
  },
]


document.addEventListener("DOMContentLoaded", function () {

  const handleMap = (mapObject) => {
    return mapObject.map((elem, index) => {
      let possitionClass = 'timeline__right';
      if (index % 2 === 0)
        possitionClass = 'timeline__left';

      return `
                <div class="timeline__container ${possitionClass}">
                    <div class="timeline__content">
                        <h3 class="heading-3">${elem.company}</h3>
                        <h4 class="heading-4">${elem.period}, ${elem.name}</h4>
                        <p class="description">${elem.description}</p>
                        <h3 class="heading-3">${elem.location}</h3>
                    </div>
                </div>
            `;
    });
  }

  document.querySelector('#education_en').insertAdjacentHTML('beforeend', handleMap(educationsEn).join(''));
  document.querySelector('#work_en').insertAdjacentHTML('beforeend', handleMap(worksEn).join(''));

  let lazyloadImages;

  const contWebpImages = function () {
    const canvas = typeof document === 'object' ?
      document.createElement('canvas') : {};
    canvas.width = canvas.height = 1;
    return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
  }

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy-img");
    const imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          const attrWebP = image.dataset.webp;

          if (typeof attrWebP !== typeof undefined && attrWebP !== false && contWebpImages) {
            image.src = attrWebP;
          }

          image.classList.remove("lazy-img");
          imageObserver.unobserve(image);
        }
      });
    }, {
      root: null,
      threshold: 0,
      rootMargin: '300px',
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    let lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy-img");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        const scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
}, {
  passive: true
})