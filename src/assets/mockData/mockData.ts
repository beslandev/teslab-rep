export type Car = {
  id: string;
  state: string;
  model: string;
  distance: string;
  carImage: string;
  subscriptionDate: string;
  registrationNumber: string;
};

export type Auto = Omit<Car, 'subscriptionDate'>;

export const mockAutomobiles: Auto[] = [
  {
    id: 'car_1',
    carImage: 'https://i.imgur.com/ZwQd6GC.jpeg',
    distance: '10000км',
    state: 'Целый',
    model: 'Genesis G70',
    registrationNumber: 'K 332 MB 777',
  },
  {
    id: 'car_2',
    carImage: 'https://i.imgur.com/PeI7QRc.jpeg',
    distance: '5245км',
    state: 'Битый',
    model: 'Mercedes-Benz S-Class',
    registrationNumber: 'K 333 MB 777',
  },
  {
    id: 'car_3',
    carImage: 'https://i.imgur.com/1bj6Kbg.jpeg',
    distance: '9800км',
    state: 'Легкое дтп',
    model: 'BMW M5',
    registrationNumber: 'K 334 MB 777',
  },
  {
    id: 'car_4',
    carImage: 'https://i.imgur.com/SX7imZU.jpeg',
    distance: '10000',
    state: 'Целый',
    model: 'TESLA MODEL X',
    registrationNumber: 'K 335 MB 777',
  },
  {
    id: 'car_5',
    carImage: 'https://i.imgur.com/eJHZ6Jv.jpeg',
    distance: '10000',
    state: 'Целый',
    model: 'TESLA MODEL S',
    registrationNumber: 'K 336 MB 777',
  },
];

export type AutoCard = Pick<Car, 'subscriptionDate' | 'model' | 'registrationNumber' | 'id'>;

export const mockAutoCards: AutoCard[] = [
  {
    id: 'car_1',
    subscriptionDate: '14.07.22',
    model: 'Genesis G70',
    registrationNumber: 'K 332 MB 777',
  },
  {
    id: 'car_2',
    subscriptionDate: '22.07.22',
    model: 'Mercedes-Benz S-Class',
    registrationNumber: 'K 333 MB 777',
  },
  {
    id: 'car_3',
    subscriptionDate: '17.07.22',
    model: 'BMW M5',
    registrationNumber: 'K 334 MB 777',
  },
  {
    id: 'car_4',
    subscriptionDate: '16.07.22',
    model: 'TESLA MODEL X',
    registrationNumber: 'K 335 MB 777',
  },
  {
    id: 'car_5',
    subscriptionDate: '11.07.22',
    model: 'TESLA MODEL S',
    registrationNumber: 'K 336 MB 777',
  },
];

export type MajorService = {
  serviceName: string;
  title: string;
  message: string;
  price: string;
  time: string;
  fuelType?: string;
  progress?: number;
  fullTank?: number;
  techMessage?: string;
};

export type MinorService = {
  serviceName: string;
  title: string;
  amount: string;
  price: string;
  total: string;
};

export type Widgets = {
  major: MajorService[];
  minor: MinorService[];
};

export type WidgetsList = {
  id: string;
  widgets: Widgets
};

export const WIDGETS: WidgetsList[] = [
  {
    id: 'car_1',
    widgets: {
      major: [
        {
          serviceName: 'fuel',
          title: 'Заправить',
          fuelType: 'АИ-95',
          message: 'Мало топлива',
          progress: 20,
          fullTank: 60,
          price: '3 325',
          time: '45 мин',
        },
        {
          serviceName: 'tech',
          title: 'Техобслуживание',
          message: 'через 937 км',
          techMessage: 'Масло ДВС, фильтры',
          price: '27 200',
          time: '6 ч',
        },
      ],
      minor: [
        {
          serviceName: 'fines',
          title: 'Штрафы',
          amount: '4 новых',
          price: '5 200',
          total: 'Всего',
        },
        {
          serviceName: 'parking',
          title: 'Паркинг',
          amount: '№ 1119',
          price: '800',
          total: '4ч прошло',
        },
        {
          serviceName: 'gas',
          title: 'АЗС',
          amount: '1,6 км',
          price: '49',
          total: '1л АИ-95',
        },
      ],
    },
  },
  {
    id: 'car_2',
    widgets: {
      major: [
        {
          serviceName: 'fuel',
          title: 'Заправить',
          fuelType: 'АИ-95',
          message: 'Мало топлива',
          progress: 40,
          fullTank: 70,
          price: '1 100',
          time: '35 мин',
        },
        {
          serviceName: 'tech',
          title: 'Техобслуживание',
          message: 'через 500 км',
          techMessage: 'Фильтры',
          price: '5 000',
          time: '2 ч',
        },
      ],
      minor: [
        {
          serviceName: 'fines',
          title: 'Штрафы',
          amount: '1 новый',
          price: '1 000',
          total: 'Всего',
        },
        {
          serviceName: 'parking',
          title: 'Паркинг',
          amount: '№ 19',
          price: '500',
          total: '2.5ч прошло',
        },
        {
          serviceName: 'gas',
          title: 'АЗС',
          amount: '1 км',
          price: '48.5',
          total: '1л АИ-95',
        },
      ],
    },
  },
  {
    id: 'car_3',
    widgets: {
      major: [
        {
          serviceName: 'fuel',
          title: 'Заправить',
          fuelType: 'АИ-100',
          message: 'Мало топлива',
          progress: 10,
          fullTank: 80,
          price: '5 000',
          time: '10 мин',
        },
        {
          serviceName: 'tech',
          title: 'Техобслуживание',
          message: 'через 10 000',
          techMessage: 'Можно ездить!',
          price: '0',
          time: '0 мин',
        },
      ],
      minor: [
        {
          serviceName: 'fines',
          title: 'Штрафы',
          amount: '2 новых',
          price: '2 000',
          total: 'Всего',
        },
        {
          serviceName: 'parking',
          title: 'Паркинг',
          amount: '№ 119',
          price: '100',
          total: '30мин прошло',
        },
        {
          serviceName: 'gas',
          title: 'АЗС',
          amount: '2 км',
          price: '60',
          total: '1л АИ-1oo',
        },
      ],
    },
  },
  {
    id: 'car_4',
    widgets: {
      major: [
        {
          serviceName: 'fuel',
          title: 'Заправить',
          fuelType: 'EL',
          message: 'Нужна зарядка',
          progress: 20,
          fullTank: 100,
          price: '1 000',
          time: '20 мин',
        },
        {
          serviceName: 'tech',
          title: 'Техобслуживание',
          message: 'через 5 000',
          techMessage: 'Проверить батарею',
          price: '2 500',
          time: '25 мин',
        },
      ],
      minor: [
        {
          serviceName: 'fines',
          title: 'Штрафы',
          amount: '3 новых',
          price: '4 000',
          total: 'Всего',
        },
        {
          serviceName: 'parking',
          title: 'Паркинг',
          amount: 'Нет парковки',
          price: '0',
          total: '0ч прошло',
        },
        {
          serviceName: 'gas',
          title: 'АЗС',
          amount: '6 км',
          price: '55',
          total: '1л АИ-95',
        },
      ],
    },
  },
  {
    id: 'car_5',
    widgets: {
      major: [
        {
          serviceName: 'fuel',
          title: 'Заправить',
          fuelType: 'АИ-95',
          message: 'Мало топлива',
          progress: 40,
          fullTank: 70,
          price: '1 100',
          time: '35 мин',
        },
        {
          serviceName: 'tech',
          title: 'Техобслуживание',
          message: 'через 500 км',
          techMessage: 'Фильтры',
          price: '5 000',
          time: '2 ч',
        },
      ],
      minor: [
        {
          serviceName: 'fines',
          title: 'Штрафы',
          amount: '0 новых',
          price: '0',
          total: 'Всего',
        },
        {
          serviceName: 'parking',
          title: 'Паркинг',
          amount: '№ 500',
          price: '300',
          total: '1ч прошло',
        },
        {
          serviceName: 'gas',
          title: 'АЗС',
          amount: '0,5 км',
          price: '49',
          total: '1л АИ-92',
        },
      ],
    },
  },
];
