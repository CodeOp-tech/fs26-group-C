import {useState} from 'react'

export default function ProfileAvatar() {

    const [image, setImage] = useState(null)

  return (
      <div>
          <div className='container'>
              <div className='row'>
                  <div className='col-3'>
                      col 1
                      <div>
                          <img src={image} className='img-thumbnail' alt="chosen-avatar-photo" />
                      </div>
                  </div>
                  <div className='col-4'> col 2</div>
                  
              </div>
              
          </div>
    </div>
  )
}
