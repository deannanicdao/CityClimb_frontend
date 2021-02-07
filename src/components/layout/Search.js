import React from 'react'
import { useForm } from "react-hook-form"
import GymView from './GymView'
import { Row, Col } from 'react-bootstrap';


import './Search.css'

const Search = () => {
    const { register, watch } = useForm()

    const selectedGym = watch("gym", false)

    return (
        <div className='container'>
        {/* <div className='search-container'> */}
            
                <div className='section'>
                    <div class="content">
                        <h1 className='large'>Select Gym</h1>
                        <form>
                            <input type="radio" name="gym" value="milton" ref={register}/>Milton
                            <input type="radio" name="gym" value="newstead" ref={register}/>Newstead
                            <input type="radio" name="gym" value="westend" ref={register}/>West End
                        </form>
                    </div>
                    <div className="scrollable-content content">
                        {/* Can we map over this and do cards from other view */}
                        {selectedGym == "milton" && <GymView gym={"milton"}/>}
                        {selectedGym == "newstead" && <GymView gym={"newstead"}/>}
                        {selectedGym == "westend" && <GymView gym={"westend"}/>}
                    </div>

            {/* <Row gutter={40}>
                {(climbs).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        
                    <Card> 
                        <CardImg top width="100%" src={"http://res.cloudinary.com/coderacademy/image/upload"+climb.image} alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h5">{climb.wall}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{climb.colour}</CardSubtitle>
                        <CardText>{climb.gym}</CardText>
                        <Button> View Climb </Button>
                           
                        </CardBody>
                    </Card>
                    
                    <br />
                    </Col>
                )}
            </Row> */}



                    
                </div>
           
        {/* </div> */}
        </div>
    )
}

export default Search

// import React from "react";
// import { useForm } from "react-hook-form";

// function App() {
//   const { register, watch, errors, handleSubmit } = useForm();
//   const watchShowAge = watch("showAge", false); // you can supply default value as second argument
//   const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
//   const watchFields = watch(["showAge", "number"]); // you can also target specific fields by their names

//   const onSubmit = data => console.log(data);

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="checkbox" name="showAge" ref={register} />
        
//         {/* based on yes selection to display Age Input*/}
//         {watchShowAge && <input type="number" name="age" ref={register({ min: 50 })} />}
        
//         <input type="submit" />
//       </form>
//     </>
//   );
// }