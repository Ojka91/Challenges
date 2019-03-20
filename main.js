var myApp = new Vue({
    el: '#app',
    data: {
        rows: [],
        columns: [],
        board: [],



    },


    methods: {
        tableSize() {
            for (x = 0; x < 100; x++) {
                this.rows.push(x)
                this.columns.push(x)
            }
            this.createBoard();
        },

        createBoard() {
            for (var x = 0; x < this.rows.length; x++) {
                this.board[x] = [];
                for (var j = 0; j < this.columns.length; j++) {
                    var random = Math.random() >= 0.95;
                    this.board[x][j] = random;
                }
            }
            setTimeout(this.printTable, 1500);

        },
        printTable() {
            document.getElementById("10S10").classList.add("cellLive");
            for (var x = 0; x < this.rows.length; x++) {
                for (var j = 0; j < this.columns.length; j++) {
                    var print = this.board[x][j];
                    if (print) {
                        document.getElementById(x + "S" + j).classList.add("cellLive");
                    }
                }
            }
            setInterval(this.startGame, 100);
    
        },
        startGame() {
           var liveChange = [];
            for (var x = 0; x < this.rows.length; x++) {
                for (var j = 0; j < this.columns.length; j++) {
                    var cp = this.board[x][j];
                    if(x<99){
                        var neighbor1 = this.board[x+1][j];
                    }
                    if(x!=0){
                        var neighbor2 = this.board[x-1][j];
                    }
                    if(j<99){
                        var neighbor3 = this.board[x][j+1];
                    }
                    if(j!=0){
                        var neighbor4 = this.board[x][j-1];
                    }
                    if(x<99&&j<99){
                        var neighbor5 = this.board[x+1][j+1];
                    }
                    if(x!=0&&j<99){
                        var neighbor6 = this.board[x-1][j+1];
                    }
                    if(x<99&&j!=0){
                        var neighbor7 = this.board[x+1][j-1];
                    }
                    if(x!=0&&j!=0){
                        var neighbor8 = this.board[x-1][j-1];
                    }
                    var neighbors = [neighbor1,neighbor2,neighbor3,neighbor4,neighbor5, neighbor6, neighbor7, neighbor8];
                    if (cp){
                        if(neighbors.filter(Boolean).length>=4 || neighbors.filter(Boolean).length<=1){
                            this.board[x][j] = false;
                            document.getElementById(x+"S"+j).classList.remove("cellLive");
                        }
                    }
                    if(cp==false){
                        if(neighbors.filter(Boolean).length==3){
                            this.board[x][j] = true;
                
                            document.getElementById(x+"S"+j).classList.add("cellLive");
                        }
                    }
                }
            }
        }

    },

    created: function () {
        this.tableSize();
    },

    mounted: function () {

    }


});