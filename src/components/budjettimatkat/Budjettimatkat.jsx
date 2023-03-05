import React from 'react'
import './budjettimatkat.css'
import IMG1 from '../../assets/budget.jpg'


const Budjettimatkat = () => {
  return (
    <div class="budjettimatkat_container">
  <h2 className='budjettimatkat-h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at elementum dui, at vulputate lacus.</h2>
  <img className="budjetti_pic" src={IMG1}/>
  <h3 className='fill-text'>
  Fusce eu tortor odio. Vivamus in vehicula quam, maximus consectetur est. In eu diam vitae arcu venenatis tristique quis a odio. Sed volutpat velit leo, eget feugiat lorem convallis at. Mauris tristique augue risus, id fringilla neque lacinia sed. Cras luctus eros lobortis, vestibulum nibh nec, tincidunt turpis. Aliquam viverra facilisis nulla nec imperdiet. Morbi sed ante tellus. Vivamus imperdiet iaculis dolor, in dapibus nisi ullamcorper finibus. Mauris mattis, sem nec consequat fermentum, lorem lectus lobortis nisi, ut congue ante ante sit amet ipsum. Nullam ornare fringilla tortor, in consectetur massa varius eu. Vestibulum quis sem enim.
</h3>


<h3 className='fill-text'>Donec ut lobortis nulla. Vestibulum fermentum, nisl a molestie commodo, mi eros porttitor enim, in feugiat dolor ligula eget nunc. Nulla facilisi. Quisque placerat malesuada sapien, a volutpat enim semper vitae. Duis tincidunt consequat nisi quis tristique. Proin vestibulum tincidunt leo, non malesuada purus interdum eu. Praesent fringilla ipsum ac finibus elementum. Fusce et ultricies diam.
</h3>


</div>

  )
}

export default Budjettimatkat