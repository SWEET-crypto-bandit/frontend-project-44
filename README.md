### Hexlet tests and linter status:
[![Actions Status](https://github.com/SWEET-crypto-bandit/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SWEET-crypto-bandit/frontend-project-44/actions)

### Описание проекта

**Brain Games** — набор консольных математических игр, развивающих логическое мышление:

- **brain-even**: определите, является ли число чётным
- **brain-calc**: вычислите результат арифметического выражения
- **brain-gcd**: найдите наибольший общий делитель двух чисел
- **brain-progression**: определите пропущенное число в арифметической прогрессии
- **brain-prime**: определите, является ли число простым

### Минимальные требования

- **Node.js**: версия 18.x и выше
- **npm**: версия 9.x и выше

### Установка

```bash
git clone git@github.com:SWEET-crypto-bandit/frontend-project-44.git
cd frontend-project-44
make install
```

### Запуск игр

- **Приветствие**:

```bash
brain-games
```

- **Игра: чётное ли число**:

```bash
brain-even
```

- **Игра: калькулятор**:

```bash
brain-calc
```

- **Игра: НОД**:

```bash
brain-gcd
```

- **Игра: арифметическая прогрессия**:

```bash
brain-progression
```

- **Игра: простое ли число**:

```bash
brain-prime
```

### Примеры игрового процесса

Для каждой игры должны быть записаны примеры с **успешным** и **неуспешным** прохождением:

- **brain-even**: https://asciinema.org/a/0p3zZ3HEKezrGC7M
- **brain-calc**: *добавьте ссылку на asciinema или скриншоты*
- **brain-gcd**: *добавьте ссылку на asciinema или скриншоты*
- **brain-progression**: *добавьте ссылку на asciinema или скриншоты*
- **brain-prime**: *добавьте ссылку на asciinema или скриншоты*

Если вы используете Windows, допускается добавить скриншоты вместо asciinema.

### Качество кода

- **Линтер**: `make lint`
- В проекте не используются классы
- На уровне модулей нет выполняющегося кода, кроме исполняемых файлов в `bin`
- Общая логика вынесена в модуль `src/index.js`
- Код конкретных игр расположен в `src/games`