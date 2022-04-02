const tiles = document.getElementsByClassName('element')
const resetbutton = document.getElementById('resetbutton')

let counter =[]
resetbutton.addEventListener('click', clearTiles)
TileEventListener()

function TileEventListener(){
    Array.from(tiles).forEach((tile) => {
        tile.addEventListener('click',(event) => {
            console.log(event.target)
            if (tile.innerText ===''){
                if (counter.length % 2 ===1){
                    tile.innerText ='X'
                    counter.push({ value: 'X', position:Array.from(tiles).indexOf(tile) + 1 })
                    CheckIfUserHasWon(counter)
                }else {
                    tile.innerText ='O'
                    counter.push({ value: 'O', position:Array.from(tiles).indexOf(tile) + 1 })
                    CheckIfUserHasWon(counter)
                }
            }
        })
    })
}
function CheckIfUserHasWon(tiles){
    const results = tiles.map((tile,index) => {
        return {
            value:tile.value,
            index:index +1,
            position:tile.position
        }
    })
    const winningcombination = [

        [1,2,3],
        [3,6,9],
        [1,4,7],
        [1,5,9],
        [4,5,6],
        [7,8,9],
        [3,5,7],
        [2,5,8],
    ]
    const xs = results.filter((result) => {
        if (result.value ==='X'){
            return result.position
        }
    })
    const os = results.filter((result) => {
        if (result.value ==='O'){
            return result.position
        }
    })
    const xsposition = xs.map((postion) => postion.position)
    const osposition = os.map((postion) => postion.position)
    winningcombination.map((combination) => {
        let checker = (results,combination) => combination.every((v) => results.includes(v))
        if (checker(xsposition,combination)){
            alert('X`s has won')
            clearTiles()
        }else if (checker(osposition,combination)) {
            alert('O`s has won')
            clearTiles()
        }
    })
}
function clearTiles(){
    Array.from(tiles).forEach((tile) => {
        tile.innerText =''
    })
    counter = []
}
