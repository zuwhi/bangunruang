function menu(){
    var icon = document.getElementById("icon");
    icon.addEventListener("click", function halamanUtama(){
        document.getElementById("judul").innerHTML=`<div id="judul">Pilih Bangun Ruang</div>`
        document.getElementById("isi").innerHTML=`                <div class="isi" id="isi">
        <div class="konten" id="konten">
            <div class="kartu" id="box-kerucut" onclick="kerucut()">
                <div class="isi-kartu">
                    <img id="picpiramid" src="/pic/cone.png" alt="">
                    <div>Kerucut</div>
                </div>

            </div>
            <div class="kartu" onclick="bola()">
                <div class="isi-kartu">
                    <img id="picbola" src="/pic/sphere.png" alt="">
                    <div>Bola</div>
                </div>
            </div>
        </div>
        <div class="konten" id="konten">
            <div class="kartu" onclick="tabung()">
                <div class="isi-kartu">
                    <img id="pictabung" src="/pic/cylinder.png" alt="">
                    <div>Tabung</div>
                </div>
            </div>
            <div class="kartu" onclick="kubus()">
                <div class="isi-kartu">
                    <img id="picslide" src="/pic/cube (2).png" alt="">
                    <div>Kubus</div>
                </div>
            </div>
        </div>
        <div class="konten" id="konten">
            <div class="kartu"  onclick="balok()">
                <div class="isi-kartu">
                <img id="picslide1" src="/pic/cube (1).png" alt="">
                <div>Balok</div>
            </div></div>
            <div class="kartu"  onclick="Limas()"><div class="isi-kartu">
                <img id="picpiramid2" src="/pic/pyramid.png" alt="">
                <div>Limas</div>
            </div></div>
        </div>
    </div>`
    });


}

function kerucut(){
    document.getElementById("judul").innerHTML=`<div id="judul">Hitung Volume Kerucut</div>`
    document.getElementById("isi").innerHTML= `                <div class="kerucut">
    <div class="bangunVolumeKerucut">
    <div class="kerucut">
        <div class="rumus">
            <img src="/pic/rumuKerucut.png" alt="">
        </div>
           <div class="inputKerucut">
<div class="input">
<div class="input"> 
    <div class="form">
        <form action="">
        <input type="number" name="" id="kerucutR" required>
        <span for="">Masukkan <strong>r</strong> :</span>
    </form>
    </div>
</div>
</div>
<div class="input">
<div class="input"> 
    <div class="form">
        <form action="">
        <input type="number" name="" id="kerucutT" required>
        <span for="">Masukkan <strong>t</strong> :</span>
    </form>
    </div>
</div>
</div>
<div class="input">
<div class="input"> 
    <div class="form">
        <form action="">
        <input type="number" name="" id="kerucutS" required>
        <span for="">Masukkan <strong>s</strong> :</span>
    </form>
    </div>
</div>
</div>
</div>
        <div class="cetak-hasil">

            <h2>Hasil :</h2>
            
            <div class="hasil" >
               
                
                <div id="volumeKerucut"></div>
                <div id="LuasKerucut"></div>
                
            </div>
          

        </div>
       
    </div>

<footer><div class="clik">
    <table>
        <tr>
            <td><input class="submit" type="submit" value="Hitung!" id="submitK" onclick="fungsiKerucut()"></td>
        </tr>

    </table>
</div></footer>
    </div>

    `}

function bola(){
     document.getElementById("judul").innerHTML=`<div id="judul">Hitung Volume Bola</div>`
     document.getElementById("isi").innerHTML=`
     <div class="bangunVolumeBola">
     <div class="Bola">
         <div class="rumus">
             
             <img src="/pic/rumusBola.png" alt="">
         </div> 
         <div class="input"> 
             <div class="form">
                 <form action="">
                 <input type="number" name="" id="bolaR" required>
                 <span for="">Masukkan <strong>r</strong> :</span>
             </form>
             </div>
         </div>
         <div class="cetak-hasil">

             <h2>Hasil :</h2>
             <div class="hasil">
                 <div id="volumeBola"></div>
             </div>
           

         </div>
        
     </div>
 
 <footer><div class="clik">
     <table>
         <tr>
             <td><input class="submit" type="submit" value="Hitung!" id="submitK" onclick="fungsiBola()"></td>
         </tr>

     </table>
 </div></footer>
     </div>

     `;
    }
function tabung(){
    document.getElementById("judul").innerHTML=`<div id="judul">Hitung Volume Tabung</div>`
    document.getElementById("isi").innerHTML=`
        <div class="bangunVolumeTabung">
                <div class="tabung">
                    <div class="rumus">
                        <img src="/pic/volumtabung.png" alt="">
                    </div>

                    <div class="input"> 
                        <div class="form">
                            <form action="">
                            <input type="number" name="" id="tabungD" required>
                            <span for="">Masukkan <strong>d</strong> :</span>
                        </form>
                        </div>
                    </div>
                    <div class="input"> 
                        <div class="form">
                            <form action="">
                            <input type="number" name="" id="tabungT" required>
                            <span for="">Masukkan <strong>t</strong> :</span>
                        </form>
                        </div>
                    </div>

                    <div class="cetak-hasil">

                        <h2>Hasil :</h2>
                        <div class="hasil">
                            <div id="volumetabung"></div>
                        </div>
                      

                    </div>
                   
                </div>
            
            <footer><div class="clik">
                <table>
                    <tr>
                        <td><input class="submit" type="submit" value="Hitung!" id="submitK" onclick="fungsiTabung()"></td>
                    </tr>

                </table>
            </div></footer>
                </div>
        
        
        
        
        
        
        
    `;}
function kubus(){
    document.getElementById("judul").innerHTML=`<div id="judul">Hitung Volume Kubus</div>`
    document.getElementById("isi").innerHTML=`
    <div class="bangunVolumeKubus">
    <div class="kubus">
        <div class="rumus">
            <img src="/pic/rumuskubus.png" alt="">
        </div>

        <div class="input"> 
            <div class="form">
                <form action="">
                <input type="number" name="" id="kubusS" required>
                <span for="">Masukkan <strong>s</strong> :</span>
            </form>
            </div>
        </div>
        

        <div class="cetak-hasil">

            <h2>Hasil :</h2>
            <div class="hasil">
                <div id="volumekubus"></div>
                <div id="luaskubus"></div>
            </div>
         </div>
       
    </div>

<footer><div class="clik">
    <table>
        <tr>
            <td><input class="submit" type="submit" value="Hitung!" id="submitK" onclick="fungsiKubus()"></td>
        </tr>

    </table>
</div></footer>
    </div>
    
    `}
function balok(){
    document.getElementById("judul").innerHTML=`<div id="judul">Hitung Volume Balok</div>`
    document.getElementById("isi").innerHTML=` <div class="bangunVolumeBalok">
    <div class="Balok">
        <div class="rumus">
            <img src="/pic/rumusbalok.jpg" alt="">
        </div>

        <div class="input"> 
            <div class="form">
                <form action="">
                <input type="number" name="" id="BalokP" required>
                <span for="">Masukkan <strong>p</strong> :</span>
            </form>
            </div>
        </div>
        <div class="input"> 
            <div class="form">
                <form action="">
                <input type="number" name="" id="BalokL" required>
                <span for="">Masukkan <strong>l</strong> :</span>
            </form>
            </div>
        </div>
        <div class="input"> 
            <div class="form">
                <form action="">
                <input type="number" name="" id="BalokT" required>
                <span for="">Masukkan <strong>t</strong> :</span>
            </form>
            </div>
        </div>
        

        <div class="cetak-hasil">

            <h2>Hasil :</h2>
            <div class="hasil">
                <div id="volumeBalok"></div>
                <div id="luasBalok"></div>
            </div>
         </div>
       
    </div>

<footer><div class="clik">
    <table>
        <tr>
            <td><input class="submit" type="submit" value="Hitung!" id="submitK" onclick="fungsiBalok()"></td>
        </tr>

    </table>
</div></footer>
    </div>`}

function Limas(){
    document.getElementById("judul").innerHTML=`<div id="judul">Hitung Volume Limas</div>`
    document.getElementById("isi").innerHTML=`<div class="bangunVolumeLimas">
    <div class="Limas">
        <div class="rumus">
            <img src="/pic/rumusLimas.jpg" alt="">
        </div>

        <div class="input"> 
            <div class="form">
                <form action="">
                <input type="number" name="" id="LimasA" required>
                <span for="">Masukkan <strong>alas</strong> :</span>
            </form>
            </div>
        </div>
        <div class="input"> 
            <div class="form">
                <form action="">
                <input type="number" name="" id="LimasT" required>
                <span for="">Masukkan <strong>tinggi</strong> :</span>
            </form>
            </div>
        </div>

        <div class="cetak-hasil">

            <h2>Hasil :</h2>
            <div class="hasil">
                <div id="volumeLimas"></div>
                <div id="luasLimas"></div>
            </div>
         </div>
       
    </div>

<footer><div class="clik">
    <table>
        <tr>
            <td><input class="submit" type="submit" value="Hitung!" id="submitK" onclick="fungsiLimas()"></td>
        </tr>

    </table>
</div></footer>
    </div>`}




var submitK = document.getElementById("submitK");
function fungsiKerucut(){
    var volumeKerucut = document.getElementById("volumeKerucut");
    var LuasKerucut = document.getElementById("LuasKerucut");

    
    
    var kerucutR = document.getElementById("kerucutR").value;
    var kerucutT = document.getElementById("kerucutT").value;
    var kerucutS = document.getElementById("kerucutS").value;
    
    // var kerucutS = document.getElementById("KerucutS").value;
    var oprasi = (1/3*3,14*kerucutR*kerucutR*kerucutT);
    var oprasiLuas = (3,14*kerucutR*(kerucutR*kerucutS));

    volumeKerucut.innerHTML= `<p>Volume :</p>
    <div>1/3 x 3,14 x ${kerucutR}^2 x ${kerucutT} = ${oprasi}</div>`;
    LuasKerucut.innerHTML= `<p>Luas :</p>
    <div>3,14 x ${kerucutR} x (${kerucutT} + ${kerucutS})= ${oprasiLuas}</div>`;
}


function fungsiBola(){
    var volumeBola = document.getElementById("volumeBola");
    
    
    var bolaR= document.getElementById("bolaR").value;
    var hasilBola = (4/3*3,14* bolaR**3);
    volumeBola.innerHTML= `<p>Volume :</p>
    <div>4/3 x 3,14 x ${bolaR}^3 = ${hasilBola}</div>`;
}
function fungsiTabung(){
    var volumetabung = document.getElementById("volumetabung");
  
    
    var tabungD= document.getElementById("tabungD").value;
    var tabungT= document.getElementById("tabungT").value;
    var hasiltabung = (3,14*(0.5*tabungD)**3 * tabungT);
    volumetabung.innerHTML= `3,14 x (1/2 x ${tabungD})^3 x ${tabungT} = ${hasiltabung}`;
}

function fungsiKubus(){
    var volumekubus = document.getElementById("volumekubus");
    var luaskubus = document.getElementById("luaskubus");
    
    
    var kubusS= document.getElementById("kubusS").value;
    var hasilkubus = (kubusS**3);
    var hasilluaskubus = (6* kubusS**2);
    volumekubus.innerHTML= `<p>Volume :</p>
    <div>${kubusS} x ${kubusS} x ${kubusS} = ${hasilkubus}</div>`;
    luaskubus.innerHTML= `<p>Luas :</p>
    <div>6 x ${kubusS} x ${kubusS} = ${hasilluaskubus}</div>`;

}

function fungsiBalok(){
    var volumeBalok = document.getElementById("volumeBalok");
    var LuasBalok = document.getElementById("luasBalok");
    
    
    var BalokP = document.getElementById("BalokP").value;
    var BalokL = document.getElementById("BalokL").value;
    var BalokT = document.getElementById("BalokT").value;
    
    var HitungVolume = (BalokP*BalokL*BalokT);
    var HitungLuas = (2*(BalokP*BalokL + BalokP*BalokT+ BalokL*BalokT));
   
    volumeBalok.innerHTML= `<p>Volume :</p>
    <div>${BalokP} x ${BalokL} x ${BalokT} = ${HitungVolume}</div>`;
    LuasBalok.innerHTML= `<p>Luas :</p>
    <div>2 x (${BalokP} x ${BalokL}+ ${BalokP} x ${BalokL} + ${BalokL} x ${BalokT})= ${HitungLuas}</div>`;
}

function fungsiLimas(){
    var volumeLimas = document.getElementById("volumeLimas");


    
    var LimasA = document.getElementById("LimasA").value;
    var LimasT = document.getElementById("LimasT").value;
    var HasilVolume = (1/3*LimasA**2*LimasT);
    volumeLimas.innerHTML= `<p>Volume :</p>
    <div>1/3 x ${LimasA} x ${LimasT} = ${HasilVolume}</div>`;

}

