import HomeIcon from '@mui/icons-material/Home'
import MailIcon from '@mui/icons-material/Mail'
import AssessmentIcon from '@mui/icons-material/Assessment'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AddCardIcon from '@mui/icons-material/AddCard'
import BackupIcon from '@mui/icons-material/Backup'
import SettingsIcon from '@mui/icons-material/Settings'

export const SidebarData = [
  {
    title: 'メール',
    icon: <HomeIcon />,
    link: '/home',
  },
  {
    title: 'ホーム',
    icon: <MailIcon />,
    link: '/mail',
  },
  {
    title: 'アナリティクス',
    icon: <AssessmentIcon />,
    link: '/analytics',
  },
  {
    title: '友達追加',
    icon: <PersonAddIcon />,
    link: '/friends',
  },
  {
    title: 'お支払い設定',
    icon: <AddCardIcon />,
    link: '/payment',
  },
  {
    title: 'アップロード',
    icon: <BackupIcon />,
    link: '/upload',
  },
  {
    title: '詳細設定',
    icon: <SettingsIcon />,
    link: '/rocket',
  },
]
