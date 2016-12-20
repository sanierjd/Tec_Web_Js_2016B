**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    hola:fuction(req, res){
        res.json({
            nombre:'HOla';
    });
    }, 
    adios:function(req, res){
        req.send('Adios');
    },
    hora:function(req, res){
        req.send('Hora');
    }
	
};

