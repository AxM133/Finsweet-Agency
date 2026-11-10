import { LuLayoutDashboard, LuLightbulb, LuPenTool, LuRocket, LuTarget, LuWrench } from 'react-icons/lu'

const TEXT = 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.'

export const PROCESS_STEPS = [
  { title: 'Discover', text: TEXT, icon: LuLightbulb },
  { title: 'Designing', text: TEXT, icon: LuPenTool },
  { title: 'Development', text: TEXT, icon: LuLayoutDashboard },
  { title: 'Testing', text: TEXT, icon: LuTarget },
  { title: 'Deployment', text: TEXT, icon: LuRocket },
  { title: 'Maintenance', text: TEXT, icon: LuWrench },
] as const
