## Задание
- Написать функцию <b>changeMatrix</b>, которая принимает двумерный массив, заполненный нулями и единицами. Функция должна вернуть новый двумерный массив тех же размеров, где вместо нулей будут строки 'zero', вместо единиц: 'one'.
- Функция принимает:
  - matrix - массив массивов, заполненных числами.

## Примечание
- Количество внутренних массивов и элементов в них - динамическое.

## Примеры
```js
{
  matrix = [
    [ 1, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 1, 0, 1, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 1, 0, 0, 1 ],
    [ 1, 0, 1, 0, 0, 0, 0, 1, 0 ]
  ];
  
  answer = [
    [ 'one', 'zero', 'zero', 'zero', 'zero', 'zero', 'zero', 'one', 'zero' ],
    [ 'zero', 'zero', 'one', 'zero', 'one', 'zero', 'zero', 'zero', 'zero' ],
    [ 'zero', 'one', 'zero', 'zero', 'zero', 'one', 'zero', 'zero', 'one' ],
    [ 'one', 'zero', 'one', 'zero', 'zero', 'zero', 'zero', 'one', 'zero' ]
  ];
}

{
  matrix = [
    [ 1, 0, 1, 0, 1, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 0, 1, 0, 1, 0 ],
    [ 0, 1, 0, 1, 0, 1 ],
    [ 1, 0, 0, 1, 1, 0 ],
    [ 0, 0, 1, 1, 0, 0 ],
    [ 1, 1, 0, 0, 1, 0 ],
    [ 0, 0, 1, 0, 0, 1 ]
  ];

  answer = [
    [ 'one', 'zero', 'one', 'zero', 'one', 'zero' ],
    [ 'zero', 'one', 'zero', 'zero', 'zero', 'zero' ],
    [ 'one', 'zero', 'one', 'zero', 'one', 'zero' ],
    [ 'zero', 'one', 'zero', 'one', 'zero', 'one' ],
    [ 'one', 'zero', 'zero', 'one', 'one', 'zero' ],
    [ 'zero', 'zero', 'one', 'one', 'zero', 'zero' ],
    [ 'one', 'one', 'zero', 'zero', 'one', 'zero' ],
    [ 'zero', 'zero', 'one', 'zero', 'zero', 'one' ]
  ];
}

{
  matrix = [
    [ 0, 1 ],
    [ 0, 0 ]
  ];

  answer = [
    [ 'zero', 'one' ],
    [ 'zero', 'zero' ]
  ];
}
```