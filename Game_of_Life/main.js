var myApp = new Vue({
    el: '#app',
    data: {
        rows: [],
        columns: [],
        board: [],
        lifeChanging: [],
        gameStart: false,
        gameRunning: "",
       
    },

    methods: {
        generateBoard() {
            this.gameStart = true;
            col = document.getElementById("columns").value;
            row = document.getElementById("rows").value;
            this.tableSize(row, col);
        },
        tableSize(row, col) {
            for (x = 0; x < row; x++) {
                this.rows.push(x)
            }
            for (y = 0; y < col; y++) {
                this.columns.push(y)
            }
            this.createBoard();
        },
        createRandomGame(){
            for (var x = 0; x < this.rows.length; x++) {
                for (var j = 0; j < this.columns.length; j++) {
                    var random = Math.random() >= 0.9;
                    this.board[x][j] = random;
                }
            }
            this.printTable();
        },
        createBoard() {
            for (var x = 0; x < this.rows.length; x++) {
                this.board[x] = [];
                for (var j = 0; j < this.columns.length; j++) {
                    this.board[x][j] = false;
                }
            }
        },
        clearBoard(){
            for (var x = 0; x < this.rows.length; x++) {
                for (var j = 0; j < this.columns.length; j++) {
                    this.board[x][j] = false;
                    if(document.getElementById(x + "S" + j).classList.contains("cellLive")){
                        document.getElementById(x + "S" + j).classList.remove("cellLive")
                    }
                }
            }
            clearInterval(this.gameRunning);
        },
        printTable() {
            for (var x = 0; x < this.rows.length; x++) {
                for (var j = 0; j < this.columns.length; j++) {
                    var print = this.board[x][j];
                    if (print) {
                        document.getElementById(x + "S" + j).classList.add("cellLive");
                    }
                    else{
                        if(document.getElementById(x + "S" + j).classList.contains("cellLive")){
                            document.getElementById(x + "S" + j).classList.remove("cellLive")
                        }
                    }
                }
            }
        
        },
        drawPattern(rows, columns){
            if(this.board[rows][columns]){
                document.getElementById(rows+"S"+columns).classList.remove("cellLive")
                this.board[rows][columns] = !this.board[rows][columns]
            }else{
                document.getElementById(rows+"S"+columns).classList.add("cellLive")
                this.board[rows][columns] = !this.board[rows][columns]
            }
        },
        start(){
            this.gameRunning = setInterval(this.startGame, 300);
        },
        stop(){
            clearInterval(this.gameRunning);
        },
        back(){
            this.gameStart = false;
        },
        startGame() {
            
            this.lifeChanging = [];
            for (var x = 0; x < this.rows.length; x++) {
                for (var j = 0; j < this.columns.length; j++) {
                    var cp = this.board[x][j];
                    if (x < this.rows.length-1) {
                        var neighbor1 = this.board[x +1][j];
                    }
                    if (x != 0) {
                        var neighbor2 = this.board[x - 1][j];
                    }
                    if (j < this.columns.length) {
                        var neighbor3 = this.board[x][j + 1];
                    }
                    if (j != 0) {
                        var neighbor4 = this.board[x][j - 1];
                    }
                    if (x < this.rows.length-1 && j < this.columns.length) {
                        var neighbor5 = this.board[x +1][j + 1];
                    }
                    if (x != 0 && j < this.columns.length) {
                        var neighbor6 = this.board[x - 1][j + 1];
                    }
                    if (x < this.rows.length-1 && j != 0) {
                        var neighbor7 = this.board[x + 1][j - 1];
                    }
                    if (x != 0 && j != 0) {
                        var neighbor8 = this.board[x - 1][j - 1];
                    }
                    var neighbors = [neighbor1, neighbor2, neighbor3, neighbor4, neighbor5, neighbor6, neighbor7, neighbor8];
                    if (cp) {
                        if (neighbors.filter(Boolean).length >= 4 || neighbors.filter(Boolean).length <= 1) {
                            this.lifeChanging.push([x, j]);
                           // document.getElementById(x + "S" + j).classList.remove("cellLive");
                        }
                    }
                    if (cp == false) {
                        if (neighbors.filter(Boolean).length == 3) {
                            this.lifeChanging.push([x, j]);
                            //document.getElementById(x + "S" + j).classList.add("cellLive");
                        }
                    }
                }
            }
            
            for (var q = 0; q < this.lifeChanging.length; q++) {

                this.board[this.lifeChanging[q][0]][this.lifeChanging[q][1]] = !this.board[this.lifeChanging[q][0]][this.lifeChanging[q][1]]
               
            }
            this.printTable();
        }

    },

    created: function () {

    },

    mounted: function () {

    }


});