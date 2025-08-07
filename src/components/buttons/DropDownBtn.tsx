import ChevronDown from '../../../public/assets/svg/chevronDown'

const styles = {
  dropdownBtn: `flex items-center mr-2 rounded-md px-2 bg-blue-700 cursor-pointer`,
}

export default function DropdownBtn({label}:{label:string}) {
  return (
   <div className={styles.dropdownBtn}>
      <p className='mr-2'>{label}</p>
      <ChevronDown fill={"#fff"}/>
    </div>
  )
}
