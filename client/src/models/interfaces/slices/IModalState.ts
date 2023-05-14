import { TMobileModal } from './../../types/TMobileModal';
import { TModal } from './../../types/TModal';

export interface IModalState {
    modalType: TModal;
    picSrc: string[];
    mobileModalType: TMobileModal;
}
