import { StyledBtnCheckbox, CheckboxWrapper, ChildWrapper } from './Style';

const Btn = ({ children, checked, onClick }: { children?: React.ReactNode, checked?: boolean, onClick?: (e: React.MouseEvent<HTMLInputElement> | undefined) => void }) => {

  return (
    <CheckboxWrapper>
      <ChildWrapper>{children}</ChildWrapper>
      <StyledBtnCheckbox onClick={onClick} type="checkbox" defaultChecked={checked} />
    </CheckboxWrapper>
  )
}

export default Btn