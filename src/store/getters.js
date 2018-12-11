const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  apiresult: state => state.riskapi.apiresult,
  apiexception: state => state.riskapi.apiexception,
  risktypekeyoptions: state => state.risktypekeys.risktypekeyoptions,
  riskkeyoptions: state => state.riskkeys.riskkeyoptions,
  singlerisk: state => state.singleriskinstance.allrisks[0],
  allrisks: state => state.allriskinstances.allrisks,
  allcolumns: state => state.allriskinstances.allcolumns
}
export default getters
