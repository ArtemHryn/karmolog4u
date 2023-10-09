const getMeditationsArcanesList = () => {
  return [
    {
      name: "Медитація на 1 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 2 код",
      isWaiting: false,
      video: "jLjjXR04Ob8?si=ifq-P8YyO02oV3Mp",
      category: "arcanes",
    },
    {
      name: "Медитація на 3 код для жінки",
      isWaiting: false,
      video: "gkXdXEdlzC0?si=zVmBWsWrRWEWNcxq",
      category: "arcanes",
    },
    {
      name: "Медитація на 3 код для чоловіка",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 4 код для жінки",
      isWaiting: false,
      video: "GUbSQJcJWk0?si=bfumKqls8S1BSBwz",
      category: "arcanes",
    },
    {
      name: "Медитація на 4 код для чоловіка",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 5 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 6 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 7 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 8 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 9 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 10 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 11 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 12 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 13 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 14 код",
      isWaiting: false,
      video: "-Zqxux0e5PE?si=rXXR2VIfVXBX8NQs",
      category: "arcanes",
    },
    {
      name: "Медитація на 15 код",
      isWaiting: false,
      video: "Jsk_p7Use8k?si=k6Kj6cZ8hTdWjLke",
      category: "arcanes",
    },
    {
      name: "Медитація на 16 код",
      isWaiting: false,
      video: "bU6YLjtKw5c?si=sN_oZQ0dzCOXd8Zv",
      category: "arcanes",
    },
    {
      name: "Медитація на 17 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 18 код",
      isWaiting: false,
      video: "tUPdIxPzfO4?si=RRANJJxx8_GLOXtG",
      category: "arcanes",
    },
    {
      name: "Медитація на 19 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 20 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 21 код",
      isWaiting: true,
      category: "arcanes",
    },
    {
      name: "Медитація на 22 код",
      isWaiting: true,
      category: "arcanes",
    },
  ];
};

const getOpenedMeditationsList = () => {
  return [
    {
      name: "Медитація “Обнулення негативного кармічного досвіду”",
      isWaiting: false,
      img: "/assets/images/meditations/free_meditation1.webp",
      category: "opened",
    },
    {
      name: "Медитація “Зцілення фізичного тіла”",
      isWaiting: false,
      img: "/assets/images/meditations/free_meditation2.webp",
      category: "opened",
    },
    {
      name: "Медитація “Вівтар кохання”",
      isWaiting: false,
      img: "/assets/images/meditations/free_meditation3.webp",
      category: "opened",
    },
    {
      name: "Медитація “Храм душі”",
      isWaiting: false,
      img: "/assets/images/meditations/free_meditation4.webp",
      category: "opened",
    },
    {
      name: "Медитація “Бажання здійснюються”",
      isWaiting: false,
      img: "/assets/images/meditations/free_meditation5.webp",
      category: "opened",
    },
  ];
};

const getClosedMeditationsList = () => {
  return [
    {
      name: "Медитація “Сила стародавніх предків”",
      img: "/assets/images/meditations/payed_meditations1.webp",
      price: "10€",
      link: "#",
    },
    {
      name: "Медитація “Джерело жіночності”",
      img: "/assets/images/meditations/payed_meditations2.webp",
      price: "10€",
      link: "#",
    },
    {
      name: "Медитація “Достаток”",
      img: "/assets/images/meditations/payed_meditations3.webp",
      price: "10€",
      link: "#",
    },
    {
      name: "Медитація “Переродження”",
      img: "/assets/images/meditations/payed_meditations4.webp",
      price: "10€",
      link: "#",
    },
    {
      name: "Медитація “Полум’я трансформації”",
      img: "/assets/images/meditations/payed_meditations5.webp",
      price: "15€",
      link: "#",
    },
  ];
};

const list = {
  getMeditationsArcanesList,
  getOpenedMeditationsList,
  getClosedMeditationsList,
};

export default list;
