document.addEventListener('DOMContentLoaded', function(){
    const anoEl = document.getElementById('ano');
    if(anoEl) anoEl.textContent = new Date().getFullYear();


// Máscaras simples para CPF, telefone e CEP
    const form = document.getElementById('cadastroForm');
    function onlyDigits(v){return v.replace(/\D/g,'');}
    function maskCPF(v){v = onlyDigits(v).slice(0,11); if(v.length>9) return v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4'); if(v.length>6) return v.replace(/(\d{3})(\d{3})(\d{1,3})/,'$1.$2.$3'); if(v.length>3) return v.replace(/(\d{3})(\d{1,3})/,'$1.$2'); return v}
    function maskPhone(v){v = onlyDigits(v).slice(0,11); if(v.length>6) return v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3'); if(v.length>2) return v.replace(/(\d{2})(\d{1,4})/,'($1) $2'); return v}
    function maskCEP(v){v = onlyDigits(v).slice(0,8); if(v.length>5) return v.replace(/(\d{5})(\d{3})/,'$1-$2'); return v}


    const elCPF = document.getElementById('cpf');
    const elPhone = document.getElementById('telefone');
    const elCEP = document.getElementById('cep');


    if(elCPF) elCPF.addEventListener('input', e=>{ e.target.value = maskCPF(e.target.value); });
    if(elPhone) elPhone.addEventListener('input', e=>{ e.target.value = maskPhone(e.target.value); });
    if(elCEP) elCEP.addEventListener('input', e=>{ e.target.value = maskCEP(e.target.value); });


// Validação simples ao submeter (pode ser estendida)
    if(form){
        form.addEventListener('submit', function(e){
            if(!form.checkValidity()){
                e.preventDefault();
                form.reportValidity();
            } else {
            e.preventDefault();
            alert('Cadastro enviado (simulação).');
            form.reset();
            }
        });
    }
});