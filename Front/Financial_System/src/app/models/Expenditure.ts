export class Expenditure {
  Id: number | any;
  Name: string | any;
  Value: number | any;
  Month: number | any;
  Year: number | any;
  TypeDipense: number | any;
  RegistrationDate: Date | any;
  DateChange: Date | any;
  PaymentDate: Date | any;
  ExpiredDate: Date | any;
  Paid: boolean | any;
  DelayedExpense: boolean | any;
  CategoryId: number | any;

  PropertyName: string = "";
  Message: string = "";
  Notifications: [] | any;
}
