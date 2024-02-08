import generateRandomImage from '@API/AnimePicture'

const mockData = [
    {name: 'Нагаторо', author: 'Манга Мангович', price: '450 Р'},
    {name: 'Великолепный Сговорщик', author: 'Сумираги Ако', price: '450 Р'},
    {name: 'Атака Титанов', author: 'Исаяма Хадзимэ', price: '500 Р'},
    {name: 'Однажды в Стране Хинамизава', author: 'Рюкэйши07', price: '600 Р'},
    {name: 'Мир в Клетке', author: 'Итано Сюдзи', price: '700 Р'},
    {name: 'Токийский Гуль', author: 'Исида Суи', price: '800 Р'},
    {name: 'Дневник Будущего', author: 'Сесима Ёума', price: '900 Р'},
    {name: 'Дорохедоро', author: 'Хаясида Кё', price: '1000 Р'},
    {name: 'Наука любви вмешивается!', author: 'Тсугуми Наоя', price: '1100 Р'},
    {name: 'Судьба/Ночь студента', author: 'Тип-Мун', price: '1200 Р'},
    {name: 'Магазинчик Мэгуру', author: 'Тории Хацуя', price: '1300 Р'},
];

async function addImagesToMockData() {
    for (const item of mockData) {
        const image = await generateRandomImage();
        item.img = image.url;
    }
}

addImagesToMockData();

export default mockData;
