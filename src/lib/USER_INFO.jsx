import { MBIcon } from '../assets/logos/MBBank';
import VietcombankIcon from '../assets/logos/Vietcombank.svg';
import MomoIcon from '../assets/logos/Momo.svg';

let ICON_STYLES = { width: '36px', height: '36px' };

export const USER_INFO = {
  avatar:
    'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/357079026_1434839893965433_8862095674849917991_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=oqsqwIR1HJUAX95_clu&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfDcIcGO57ZGmGk5ubHtNg7rXEE5sfvosTiPlsYbcI2M4Q&oe=658C7946',
  bgImage:
    'https://images.unsplash.com/photo-1701964621389-2347fbba8280?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Trương Nguyễn Anh Khoa',
  job: 'Developer / Video Editor',
  banks: [
    {
      name: 'MBBank',
      account_name: 'Trương Nguyễn Anh Khoa',
      account_number: '2527012004',
      icon: <MBIcon sx={ICON_STYLES} />,
    },
    {
      name: 'Vietcombank',
      account_name: 'Trương Nguyễn Anh Khoa',
      account_number: '1037018324',
      icon: (
        <img
          src={VietcombankIcon}
          alt="VietcombankIcon"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: 'MoMo',
      account_name: 'Trương Nguyễn Anh Khoa',
      account_number: '0796802399',
      icon: (
        <img
          src={MomoIcon}
          alt="VietcombankIcon"
          style={{ width: 24, height: 24, borderRadius: '5px' }}
        />
      ),
    },
  ],
};
