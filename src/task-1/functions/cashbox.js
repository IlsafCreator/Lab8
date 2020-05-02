class Cashbox {
  constructor(amount) {
    (amount && amount >= 0) ? this.amount = amount : this.amount = 0;
  }
  isOperationValid(operation) {
    if (((typeof (operation.amount) === 'number') && (operation.amount > 0) && isFinite(operation.amount)) && ((typeof (operation.info) === 'string') && operation.info !== ''))
      return true;
    return false;
  }
  addPayment(payment) {
    if (this.isOperationValid(payment)) {
      this.amount = this.amount + payment.amount;
      return ('Зачисление на счёт. Платеж: "' + payment.info + '" на сумму: ' + payment.amount + ' уе произведён.');
    } else {
      return ('ОШИБКА. Не удаётся совершить платёж ');
    }
  }
  refundPayment(refund) {
    if (this.isOperationValid(refund)) {
      if (this.amount > 0 && this.amount - refund.amount >= 0) {
        this.amount = this.amount - refund.amount;
        return ('Снятие со счёта. "' + refund.info + '" на сумму: ' + refund.amount + ' уе.');
      } else if (this.amount >= 0 && this.amount - refund.amount < 0) {
        return ('ОШИБКА. Недостаточно средств для снятия со счёта');
      }
    } else {
      return ('ОШИБКА. Введите правильные данные');
    }
  }
}

module.exports = Cashbox;