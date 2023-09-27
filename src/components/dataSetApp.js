import Steps4 from "../mywork/steps4.jpg"
import Steps1 from "../mywork/steps1.jpg"
import Steps2 from "../mywork/steps2.jpg"
import Steps3 from "../mywork/steps3.jpg"
import Steps5 from "../mywork/steps5.jpg"
import ToDoApp from "../mywork/ToDoApp.jpg"


const dataSetApp = [
      {
        "id":1,
        image:Steps4,
        link:"https://github.com/alaadwd/steps2",
        imgsArray :[Steps4,Steps1,Steps2,Steps3,Steps5],
        descript:"App Dev",
        title:"Steps App",
        smolDescript:"This App was built using React Native , NativeWind and AsyncStorage, Basically I wanted to make a cake again but I forgot what the steps were and in which order they are, This sparked in my mind the idea of the app which is : you create a project let's call Make Cake and add small description too then you fill in the steps it takes to make -no matter how many they were- after that you submit the project and you can check it whenever you need and even delete if wanted :C "
      },
      {
        "id" :2,
        image:ToDoApp,
        link:"https://github.com/alaadwd/SourceCode_For_Gallery",
        imgsArray:[ToDoApp],
        descript:"App Dev",
        title:"To Do List App",
        smolDescript:"This is my first React Native App I practiced doing! a simple to do list that scrolls infinitely alongside the infinitely life chores and choices, simple pretty design with delete feature x)"

      }
]

export default dataSetApp