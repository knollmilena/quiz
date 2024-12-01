const quizData = [
  {
    name: "q1",
    question: "Что такое операционная система?",
    answers: [
      {
        id: "1",
        text: "Это просто программа на компьютере, как и другие - Word или Chrome",
        correct: false,
      },
      {
        id: "2",
        text: "Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный",
        correct: false,
      },
      {
        id: "3",
        text: "Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем",
        correct: true,
      },
      {
        id: "4",
        text: "Нет такого понятия, есть понятие 'файловая система'",
        correct: false,
      },
    ],
  },
  {
    name: "q2",
    question: "Является ли Android операционной системой?",
    answers: [
      {
        id: "1",
        text: "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
        correct: true,
      },
      {
        id: "2",
        text: "Нет, операционные системы бывают только для ПК",
        correct: false,
      },
      {
        id: "3",
        text: "Нет, Android это программа, которая ставится на операционную систему девайса",
        correct: false,
      },
      { id: "4", text: "ОС на разных девайсах разные", correct: false },
    ],
  },
  {
    name: "q3",
    question: "Что такое процессор компьютера?",
    answers: [
      {
        id: "1",
        text: "Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки",
        correct: false,
      },
      {
        id: "2",
        text: "Это общее название всех комплектующих компьютера",
        correct: false,
      },
      {
        id: "3",
        text: "Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств",
        correct: true,
      },
      {
        id: "4",
        text: "Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц",
        correct: false,
      },
    ],
  },
  {
    name: "q4",
    question: "Какие бывают разрядности у современных процессоров?",
    answers: [
      { id: "1", text: "32 и 64 бита", correct: true },
      { id: "2", text: "12 и 32 бита", correct: false },
      { id: "3", text: "15 и 32 бита", correct: false },
      { id: "4", text: "86 и 64 бита", correct: false },
    ],
  },
  {
    name: "q5",
    question: "Какой тип процессора чаще всего используют мобильные девайсы?",
    answers: [
      {
        id: "1",
        text: "iOS использует Intel, остальные используют AMD",
        correct: false,
      },
      { id: "2", text: "Чаще всего используют Intel", correct: false },
      { id: "3", text: "Чаще всего используют AMD", correct: false },
      { id: "4", text: "Чаще всего используют ARM", correct: true },
    ],
  },
  {
    name: "q6",
    question: "Для чего компьютеру нужна RAM?",
    answers: [
      { id: "1", text: "Для быстрого доступа к данным", correct: true },
      { id: "2", text: "Для долгосрочного хранения данных", correct: false },
      { id: "3", text: "Для правильной фрагментации памяти", correct: false },
      { id: "4", text: "Для дефрагментации данных", correct: false },
    ],
  },
  {
    name: "q7",
    question: "Чем отличается HDD от SSD?",
    answers: [
      {
        id: "1",
        text: "HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее",
        correct: false,
      },
      {
        id: "2",
        text: "HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее",
        correct: false,
      },
      {
        id: "3",
        text: "SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее",
        correct: false,
      },
      {
        id: "4",
        text: "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее",
        correct: true,
      },
    ],
  },
  {
    name: "q8",
    question: "Как отличаются между собой USB?",
    answers: [
      { id: "1", text: "Бывают только USB 2.0 и 3.2", correct: false },
      { id: "2", text: "Бывают только micro-USB и mini-USB", correct: false },
      {
        id: "3",
        text: "USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2)",
        correct: true,
      },
      {
        id: "4",
        text: "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)",
        correct: true,
      },
    ],
  },
  {
    name: "q9",
    question: "Какой файловой системы не существует?",
    answers: [
      { id: "1", text: "Fat", correct: false },
      { id: "2", text: "NTFS", correct: false },
      { id: "3", text: "APFS", correct: false },
      { id: "4", text: "BolSFS", correct: true },
    ],
  },
];
export default quizData;
