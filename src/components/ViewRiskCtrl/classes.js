export class RiskField {
  constructor(id, risktypefield, risk, risk_type_field_name, risk_type_field_enum, risk_field_value) {
    this.id = id
    this.risktypefield = risktypefield
    this.risk = risk
    this.risk_type_field_name = risk_type_field_name
    this.risk_type_field_enum = risk_type_field_enum
    this.risk_field_value = risk_field_value
  }
}
export class RiskCtrlConst {
}
RiskCtrlConst.CarouselHelpText = [
  {
    'id': 1,
    'text': 'User can view single Risk Instance using this form.'
  },
  {
    'id': 2,
    'text': 'Select appropriate Risk Instance from dropdown box.'
  },
  {
    'id': 3,
    'text': 'Screen will show Risk name and all Risk Instance fields (read-only).'
  }
]
