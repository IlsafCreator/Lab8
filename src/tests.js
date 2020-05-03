const pulloutArray = require('./task-1/functions/pulloutArray.js');//done
const check = require('./task-1/functions/check.js');//done
const isTimeRangesIntersect = require('./task-1/functions/isIntersect.js');//done
const replaceString = require('./task-1/functions/replace.js');//done
const Cat = require('./task-1/functions/cat.js');//done
const Cashbox = require('./task-1/functions/cashbox.js');//done
const Player = require('./task-2/player.js');//inprogress
var assert = require('assert');

describe('pulloutArray', () => {
  it('данные без вложенности не модифицируются', () => {
    assert.deepEqual(pulloutArray([1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(pulloutArray([1.1, 2.2, 3.3]), [1.1, 2.2, 3.3]);
  });
  it('данные с вложенностью 1 преобразовываются в массивы без вложенности', () => {
    assert.deepEqual(pulloutArray([1, [2, 3]]), [1, 2, 3]);
    assert.deepEqual(pulloutArray([1.1, [2.2, 3.3]]), [1.1, 2.2, 3.3]);
  });
  it('при передаче falsy-значений параметра вернет пустой массив', () => {
    assert.deepEqual(pulloutArray([]), []);
    assert.deepEqual(pulloutArray([null]), []);
    assert.deepEqual(pulloutArray([NaN]), []);
    assert.deepEqual(pulloutArray([undefined]), []);
    assert.deepEqual(pulloutArray([false]), []);
  });
  it('при передаче нечисловых данных вернёт пустой массив', () => {
    assert.deepEqual(pulloutArray([false, true]), []);
    assert.deepEqual(pulloutArray([true, false, [true, false]]), []);
    assert.deepEqual(pulloutArray(['1', 'text']), []);
    assert.deepEqual(pulloutArray([{}, {}]), []);
  });
});

describe('check', () => {
  it('при совпадение данных и ожидаемого типа вернёт true', () => {
    assert.equal(check(48, 'number'), true);
    assert.equal(check('48', 'string'), true);
    assert.equal(check(true, 'boolean'), true);
    assert.equal(check(null, 'null'), true);
    assert.equal(check(undefined, 'undefined'), true);
    assert.equal(check([3, 1, 4, 1, 5], 'object'), true);
    assert.equal(check({ description: 'I am a simple object. And, yes, i am also an easter egg.' }, 'object'), true);
  });
  it('если данные и ожидаемый тип не совпадают, вернёт false', () => {
    assert.equal(check(48, 'object'), false);
    assert.equal(check('48', 'boolean'), false);
    assert.equal(check(true, 'object'), false);
    assert.equal(check(null, 'undefined'), false);
    assert.equal(check(undefined, 'string'), false);
    assert.equal(check([3, 1, 4, 1, 5], 'null'), false);
    assert.equal(check({ description: 'I am a simple object. And, yes, i am also an easter egg.' }, 'number'), false);
  });
  it('если ожидаемый тип некорректен, вернёт false', () => {
    assert.equal(check(48, Number), false);
    assert.equal(check('48', String), false);
    assert.equal(check(true, Boolean), false);
    assert.equal(check(null, null), false);
    assert.equal(check(undefined, undefined), false);
    assert.equal(check([3, 1, 4, 1, 5], Array), false);
    assert.equal(check({ description: 'I am a simple object. And, yes, i am also an easter egg.' }, Object), false);
  });
});

describe('isTimeRangesIntersect', () => {
  it('при пересечении временных интервалов возвращается true', () => {
    assert.equal(isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']), true);
    assert.equal(isTimeRangesIntersect(['13:05', '13:30'], ['13:25', '13:40']), true);
    assert.equal(isTimeRangesIntersect(['08:30', '10:00'], ['09:59', '12:00']), true);
  });
  it('если временные интервалы равны, возвращается true', () => {
    assert.equal(isTimeRangesIntersect(['09:00', '12:00'], ['09:00', '12:00']), true);
  });
  it('если временные интервалы не пересекаются, возвращается false', () => {
    assert.equal(isTimeRangesIntersect(['08:30', '08:45'], ['09:00', '10:00']), false);
    assert.equal(isTimeRangesIntersect(['21:00', '21:59'], ['22:00', '22:45']), false);
  });
  it('при передаче неверных значений, возвращается false', () => {
    assert.equal(isTimeRangesIntersect([null, '08:45'], ['09:00', '10:00']), false);
    assert.equal(isTimeRangesIntersect([undefined, '99:99'], ['09:00', '10:00']), false);
    assert.equal(isTimeRangesIntersect(['99:99', '08:45'], ['09:00', '10:00']), false);
    assert.equal(isTimeRangesIntersect([Object, '08:45'], ['09:00', '10:00']), false);
    assert.equal(isTimeRangesIntersect([Number, '08:45'], ['09:00', '10:00']), false);
    assert.equal(isTimeRangesIntersect([88, '08:45'], ['09:00', '10:00']), false);
  });
});

describe('replaceString', () => {
  it('при верных параметрах вернёт изменённую строку', () => {
    assert.equal(replaceString('I am string', 'string', 'Batman'), 'I am Batman');
    assert.equal(replaceString('incorrect text', 'in', ''), 'correct text');
  });
  it('при неверных параметрах вернёт false', () => {
    assert.equal(replaceString('a', 'b', 'c'), false);
    assert.equal(replaceString({}, 'a', 'b'), false);
    assert.equal(replaceString([], 'a', 'b'), false);
    assert.equal(replaceString(Object, 'a', 'b'), false);
    assert.equal(replaceString(Number, 'a', 'b'), false);
    assert.equal(replaceString(String, 'a', 'b'), false);
    assert.equal(replaceString(Boolean, 'a', 'b'), false);
    assert.equal(replaceString(null, 'a', 'b'), false);
    assert.equal(replaceString(undefined, 'a', 'b'), false);
    assert.equal(replaceString({}, {}, ''), false);
    assert.equal(replaceString([], [], ''), false);
    assert.equal(replaceString({}, {}, {}), false);
    assert.equal(replaceString([], [], []), false);
    assert.equal(replaceString('text', null, 'b'), false);
    assert.equal(replaceString('text', undefined, 'b'), false);
    assert.equal(replaceString('text', [], 'b'), false);
    assert.equal(replaceString('text', {}, 'b'), false);
    assert.equal(replaceString('text', 314, 'b'), false);
    assert.equal(replaceString('text', false, 'b'), false);
    assert.equal(replaceString('text', true, 'b'), false);
    assert.equal(replaceString('text', 't', null), false);
    assert.equal(replaceString('text', 't', undefined), false);
    assert.equal(replaceString('text', 't', []), false);
    assert.equal(replaceString('text', 't', {}), false);
    assert.equal(replaceString('text', 't', 314), false);
    assert.equal(replaceString('text', 't', false), false);
    assert.equal(replaceString('text', 't', true), false);
  });
});

describe('Cat', () => {
  describe('meow', () => {
    it('Вызов функции вернёт\'Meow!\'', () => {
      const cat = new Cat('Tom');
      assert.equal(cat.meow(), 'Meow!');
    });
  });
  describe('reaction', () => {
    it('Вызов функции \'reaction\' с параметром, значение которого присутствует внутри объекта,вернёт соответствующее значение', () => {
      const cat = new Cat('Tom');
      assert.equal(cat.reaction('vacuum cleaner'), 'run from here!!!!');
      assert.equal(cat.reaction('beep'), 'run from here!!!!');
      assert.equal(cat.reaction('ksksks'), 'Hmm? Food?! I`m already running.');
    });
    it('Вызов функции \'reaction\' с параметром, значение которого отствует внутри объекта,вернёт false', () => {
      const cat = new Cat('Tom');
      assert.equal(cat.reaction('lorem ipsum'), false);
    });
  });
});

describe('Cashbox', () => {
  describe('constructor', () => {
    it('При создании объекта с пустым значением, поле \'amount\' принимает 0', () => {
      const cashbox = new Cashbox();
      assert.equal(cashbox.amount, 0);
    });
    it('При создании объекта с невалидным значением, поле \'amount\' принимает 0', () => {
      const cashbox = new Cashbox(-100);
      assert.equal(cashbox.amount, 0);
      const cashbox1 = new Cashbox(NaN);
      assert.equal(cashbox1.amount, 0);
      const cashbox2 = new Cashbox(null);
      assert.equal(cashbox2.amount, 0);
      const cashbox3 = new Cashbox(undefined);
      assert.equal(cashbox3.amount, 0);
      const cashbox4 = new Cashbox(String);
      assert.equal(cashbox4.amount, 0);
      const cashbox5 = new Cashbox({});
      assert.equal(cashbox5.amount, 0);
      const cashbox6 = new Cashbox([]);
      assert.equal(cashbox6.amount, 0);
    });
    it('При создании объекта с валидным значением, поле \'amount\' принимает это значение', () => {
      const cashbox = new Cashbox(100);
      assert.equal(cashbox.amount, 100);
    });
  });
  describe('addPayment', () => {
    it('при вызове функции с валидными значениеми, вернётся сообщение об успешном выполнении, а также и изменится поле \'amount\'', () => {
      const cashbox = new Cashbox(0);
      assert.equal(cashbox.addPayment({ amount: 100, info: 'test value' }), 'Зачисление на счёт. Платеж: "test value" на сумму: 100 уе произведён.');
      assert.equal(cashbox.amount, 100);
    });
    it('при вызове функции с некорректным \'amount\' и/или \'info\', вернётся ошибка выполнения,и поле \'amount\' не изменится', () => {
      const cashbox = new Cashbox(0);
      assert.equal(cashbox.addPayment({ amount: 0, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: -100, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: null, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: undefined, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: -0, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: +0, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: { amount: 100 }, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: [100], info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: Infinity, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: String, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: false, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: true, info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: '100', info: 'test value' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: 100 }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: '' }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: null }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: undefined }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: -0 }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: +0 }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: { value: 'text' } }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: ['text'] }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: String }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: Object }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: false }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.addPayment({ amount: 100, info: true }), 'ОШИБКА. Не удаётся совершить платёж ');
      assert.equal(cashbox.amount, 0);
    });
  });
  describe('refundPayment', () => {
    it('при вызове функции с валидными значениеми, вернётся сообщение об успешном выполнении, а также и изменится поле \'amount\'', () => {
      const cashbox = new Cashbox(1000);
      assert.equal(cashbox.refundPayment({ amount: 500, info: 'test value' }), 'Снятие со счёта. "test value" на сумму: 500 уе.');
      assert.equal(cashbox.amount, 500);
    });
    it('если функция вызвана с валидными значениеми,но \'amount\' меньше, чем параметр в функции, то вернётся ошибка, и \'amount не изменится\'', () => {
      const cashbox = new Cashbox(1000);
      assert.equal(cashbox.refundPayment({ amount: 1500, info: 'test value' }), 'ОШИБКА. Недостаточно средств для снятия со счёта');
      assert.equal(cashbox.amount, 1000);
    });
    it('при вызове функции с некорректным \'amount\' и/или \'info\', вернётся ошибка выполнения,и поле \'amount\' не изменится', () => {
      const cashbox = new Cashbox(0);
      assert.equal(cashbox.refundPayment({ amount: 0, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: -100, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: null, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: undefined, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: -0, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: +0, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: { amount: 100 }, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: [100], info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: Infinity, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: String, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: false, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: true, info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: '100', info: 'test value' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: 100 }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: '' }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: null }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: undefined }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: -0 }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: +0 }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: { value: 'text' } }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: ['text'] }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: String }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: Object }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: false }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.refundPayment({ amount: 100, info: true }), 'ОШИБКА. Введите правильные данные');
      assert.equal(cashbox.amount, 0);
    });
  });
});

describe('Player', () => {
  describe('constructor', () => {
    it('При создании объекта по умолчанию (без параметров), playerList будет пуст', () => {
      const player = new Player.Player();
      assert.equal(player.playerList.songs.length, 0);
    });
    it('При создании объекта с использование параметров,размер playerList будет равен количеству треков', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209),
        new Player.Song('Beat it', 211),
        new Player.Song('Country road', 240),
        new Player.Song('Venger', 310),
        new Player.Song('Чёрное солнце', 289)
      ]);
      assert.equal(player.playerList.songs.length, 5);
    })
  });
  describe('display', () => {
    it('вызов функции после создания валидного объекта вернёт ожидаемый результат', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209)
      ]);
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: stop; Volume:50')
    });
    it('вызов функции после создания объекта по умолчанию (без параметров) вернёт сообщение о том, что playerList пуст', () => {
      const player = new Player.Player();
      assert.equal(player.display(), 'Player list is empty')
    });
  });
  describe('play', () => {
    it('вызов функции при пустом плейлисте не влияет на состояние \'player\'', () => {
      const player = new Player.Player();
      player.play();
      assert.equal(player.status, 'stop');
      assert.equal(player.display(), 'Player list is empty');
    });
    it('вызов функции при непустом плейлисте меняет состояние свойства \'status\' на \'play\'', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209)
      ]);
      player.play();
      assert.equal(player.status, 'play');
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: play; Volume:50')
    });
  });
  describe('pause', () => {
    it('вызов функции при пустом плейлисте не влияет на состояние \'player\'', () => {
      const player = new Player.Player();
      player.pause();
      assert.equal(player.status, 'stop');
      assert.equal(player.display(), 'Player list is empty');
    });
    it('вызов функции при непустом плейлисте меняет состояние свойства \'status\' на \'pause\'', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209)
      ]);
      player.pause();
      assert.equal(player.status, 'pause');
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: pause; Volume:50')
    });
  });
  describe('next', () => {
    it('при вызове функции с пустым \'playList\', состояние \'player\'а не измениться и вернётся сообщение о пустом \'playlist\' ', () => {
      const player = new Player.Player();
      assert.equal(player.display(), 'Player list is empty');
      player.next();
      assert.equal(player.display(), 'Player list is empty');
    });
    it('при вызове функции с \'playList\' содержащим треки, \'player\' изменит своё состояние и переключится на следующий трек', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209),
        new Player.Song('Beat it', 211),
        new Player.Song('Country road', 240),
        new Player.Song('Venger', 310),
        new Player.Song('Чёрное солнце', 289)
      ]);
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: stop; Volume:50');
      player.next();
      assert.equal(player.display(), 'Track: Beat it; Status: stop; Volume:50')
    });
    it('при вызове функции на последнем треке в \'playList\', \'player\' переместится на первый трек', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209),
        new Player.Song('Beat it', 211)
      ]);
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: stop; Volume:50');
      player.next();
      assert.equal(player.display(), 'Track: Beat it; Status: stop; Volume:50');
      player.next();
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: stop; Volume:50');
    });
  });
  describe('prev', () => {
    it('при вызове функции с пустым \'playList\', состояние \'player\'а не измениться и вернётся сообщение о пустом \'playlist\' ', () => {
      const player = new Player.Player();
      assert.equal(player.display(), 'Player list is empty');
      player.prev();
      assert.equal(player.display(), 'Player list is empty');
    });
    it('при вызове функции с \'playList\' содержащим треки, \'player\' изменит своё состояние и переключится на предыдущий трек', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209),
        new Player.Song('Beat it', 211),
        new Player.Song('Country road', 240),
        new Player.Song('Venger', 310),
        new Player.Song('Чёрное солнце', 289)
      ]);
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: stop; Volume:50');
      player.next();
      assert.equal(player.display(), 'Track: Beat it; Status: stop; Volume:50');
      player.prev();
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: stop; Volume:50');
    });
    it('при вызове функции на первом треке в \'playList\', \'player\' переместится на последний трек', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209),
        new Player.Song('Beat it', 211),
        new Player.Song('Country road', 240),
        new Player.Song('Venger', 310),
        new Player.Song('Чёрное солнце', 289)
      ]);
      assert.equal(player.display(), 'Track: Children of cyberpunk; Status: stop; Volume:50');
      player.prev();
      assert.equal(player.display(), 'Track: Чёрное солнце; Status: stop; Volume:50');
    });
  });
  describe('increaseVolume', () => {
    it('вызов функции при нормальной громкости увеличивает звук', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209)
      ]);
      player.volume = 50;
      player.increaseVolume();
      assert.equal(player.volume, 60);
    });
    it('вызов функции при максимальной(100) громкости возвращает сообщение и не увеличивает звук', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209)
      ]);
      player.volume = 100;
      assert.equal(player.increaseVolume(), 'volume is already max');
    });
  });
  describe('decreaseVolume', () => {
    it('вызов функции при нормальной громкости уменьшает звук', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209)
      ]);
      player.volume = 50;
      player.decreaseVolume();
      assert.equal(player.volume, 40);
    });
    it('вызов функции при минимальной(0) громкости возвращает сообщение и не уменьшает звук', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209)
      ]);
      player.volume = 0;
      assert.equal(player.decreaseVolume(), 'volume is already min');
    });
  });
  describe('shuffle', () => {
    it('вызов функции меняет порядок треков в \'playerList\'', () => {
      const player = new Player.Player([
        new Player.Song('Children of cyberpunk', 209),
        new Player.Song('Beat it', 211),
        new Player.Song('Country road', 240),
        new Player.Song('Venger', 310),
        new Player.Song('Чёрное солнце', 289)
      ]);
      player.shuffle();
      assert.notEqual(player.playerList.songs, [
        new Player.Song('Children of cyberpunk', 209),
        new Player.Song('Beat it', 211),
        new Player.Song('Country road', 240),
        new Player.Song('Venger', 310),
        new Player.Song('Чёрное солнце', 289)
      ]);
    });
  });
});