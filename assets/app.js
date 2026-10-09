
(function(){
'use strict';
const IMG_FOLDER='assets/imagens';
const CLIPBOARD_IMAGES={"logo":"data:image/png;base64,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","facebook":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEa0lEQVR4nL2Wz2sdVRTHP+fcmclLXn62kmpqa6QLURBFkC6i9cfChbjQ1NCCqS6ruwb3Puo/0C4E3SoRhNhURFy4UUtTEIogVotQJIht00dr8+O9l2Rm7j0uJr9e3outFD2bmblz7/ne7/ece88R2tmYOabEA3S99cP9HeirAXsNC/shPIIFEAX0N0T/UOTsKuGLxscH57av32qyE1Dn0W+Gko7+94BXxMV7sYAFDyHbnKsxog5EMZ9dBb5KV+ffX/7spWvtALUJqFJRpsT3Hjt/JCntuihx+TjYXkvrwbLlQEhtc7KBXzFLG8FWlwLm90pcPp6Udl3sPXb+CFPiqVSa/MvGc8yUKfH94zOnSLpOmM/ApzmCA9lUwKz41KhgtTlulqceF0fiYkgbp+cnRybWGAbACifPfRvx/Qt57/i5U65rz4mwfCvHgiLSzNwMogQsEGpVbLUGBDBAFde3D9CAELTzvsg3bpxenDw0se5f1rXte+Pc69LRO2VZPQOLmtisAYlL8It/svLrl/jFa2vxE7AcibsoP/suknSD5QaaS1yObXVxbOHTQ58zZk6oVLRr9uXB2MLPiNuNT62F0Xp4/Qr1Cx/ga3NIUgafYxYQDIk7t4B5MAIuEczfykQfbwx/XRWAvvGZD6U08Lat/JUjErXgmEeiEtn1n2j8+EnhMF/B9e0jOfAiiCKquP6H1o7Ehhq5lHZFtnL7o4XJkXei8vjMIGqjli1ZkQwtSEUylPqwPN0czVPi/QfpOPA8tlrDLGCrS81LBWfZkqE2Wh6fqURObFSi8qCltYCotgLFhMVrpL9/R75wFdEILCBRQjZ3qQDKGmj3HuKhpwoJN9EEnwZJugddVh+NxOQwFgxRY7uZIRoTanMsXzqLlnpAY7AAGuOrl8lv/IJly8RDT5A8+DSW5825JWpYMDE5HCE2TPCCmW5PwA12KOJiELf2vc7aFcqHvPnMNW9YCV4QG5a+Ny8Y1kpqw6E4bGWBsLJANneJdPYcEnVi2TLJw88QDz2JpQ20owfteaBg3c5EiLBgLWdqc0YRn44e4v79+Fq1cCbFuHbvIR58DEvrBV+ftXcDYMEiRGVnZhsTsazRfAkDhAzLlrFsuZB4pz0DiIpi4YpoDHYHRFFai4QU46I7A5lZ4T9cUUxmUWeI7CD2PZpIQJ1hMqsmdqaQMvyDBvdgFgRRMbEz6k2mLa9XcYlwx+D9ayTDJWJ5vepNprU+OVIlyLTEPYLRUsqbbWuM2sVwOxZe4h4hyHR9cqSqVCqaueikpQs3cYnDdjwoRfaltSLV09pmiWlPKuASZ+nCzcxFJ6lU9C7rWVHL8tuz5NXLiEswnxINPko0MIz5dBuoGUibegZ3WamLS1lcUrwjBch2dmYB0aCdu9tU6nWN7qoHseYcEtkCZIbhccmOPcj6zm29G5qfHJkIWf0ootelNBChsRTFykKh59YEwTb+aSxSGogQvR6y+tH5yZGJ9W5tTYr/t29sn0r/UUf8Ny2qqwMJelxCAAAAAElFTkSuQmCC","instagram":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAFXElEQVR4nL2WXYgdZxnHf/93Zs7MnuOePfk0cdu4kMVYpFQoKmVLYzWIBAuxNTTgFileVC+E5NYLF7zwNr2zd0VcQVwbhUovSko0bEAlEWov6uqWrk3TrRuT7Ifna2be9/Fi9uuYk9QbfWEYBp55/s/H//m/jxh2TlvEnDxA/Vt/OJTiTgXs61g4AuEYFkAOcAvIvefQr/qEX3d+8oUP//P/3Uf3Aho58/onamnrB8DXFCXjWMCCh1Ds2LoEuQjkMF/cAH6T91d/2P35Vz4YBugGgGZmHHPyzefmn61le68qabwANm55O1jRDYTcBuxDblZ0g+XtADaupPFCLdt7tfnc/LPMyTMzM+Bf2+/T5piTb01fOU+tftZ8AT4vERFIMIhzd4HMMDxRLVaUQN55cXV26txmhgGwCvn4pYg5+eb05fOq7z9rRbfE5wERYyYkUHSfx4EhIMbnwYpuqfr+s83py+eZk+f4pWgro4g5+bFvXv6G0uacFe0CLMYQLkZxjdBbB7ur3wOZuXQUMKzMQRioVNJIrL9+eu1nT/yS0xaJmRlXXzp5MLHwFor24XMDHFGC9dbpv/MG5c0FzPcRjqHllHBjD5BNniBqfRIr+wCBqCbM3yrkHu5MvLYigLHpKz9Wtuc71rtdImIUY/kG7d+/hF/9Oy4bQ0kdLGx6N3YT2TCs/y9wEY3PfZv4wKexoguoVLY3tt6dl9Zmp76rxvSVg7Gzt1BygFCAmVRr0PvzL+gtXqT24OdJj51EtQaEclePAoQSxSmhc4vOn35K6NwiGhun8dj3NgMywyVgxc0y6GEXyZ5W3Di4WT6hCOuvU9xcwGVjpMdOEjXHUZTg6vtRMgLmUTKCq+9DtY9hvo/fWEZxit/4EL9+HUU1MBM+N8WNg5Hs6VimZ7BgyBkYSFgooeyjpI5qdaxooyiluHGN/uJFQm8Vl7VIJ0+QHH6EqPkA2ae+Sv7+H6HsQ5lX0wIgZ1gwmZ5xyCYIXpjtGkBtjlaA4FHSoFh+k861l/Fr10EOv3adzrWXKZbfRMkI2WdOEbWOgM+rUm831BzBC9mEQ27SQgHS3dJVRYaVPfqLFwHIHnqK0S9+n+yhpwDov/MGVvQqym8TaICpqvy7SYeF+0kDKMKKDtZbw2UtahOPo3SU2sTjuKyFde9gRafSyPsdC+aQG57RtpGvepeNEXqr5EvzWH+DfGme0FtFI3tQUscsMEzXd4J2clhYlEvAbHiGFlCckU6eAKD39qts/PZH9N5+FYB08ssoToeXEMDMKv9h0WFawkWGNKzgVc+KDsnhR6g/+nxFAjOi1hHqjz5PcuizWNFFcjsMHHChgIsM01JsslckdwIL2jGuQPA5mIFLtgErdehUpY1TrOxUtnIV7eUGy2lByMlkrzhvumBle4WoJsAIHpc2iVoP4rt3yJfmEbbdF8UprrG/AtossZKM4sZV/O13cY0DuOYhzBeAjKgmK9sr3nQhbs9OrYxNX7mgbHRHGwmkR79EufIX+n97nfKff8VlY5skgN3aKAkr+5S338XKLvWjp3BpEys6gLyS0dh6dy60Z6dW7qn6ilPKmwv0Fl6rBrmKlEHV3/yWwzUOkB59ktqRxyoFMhui+ve5zxRnmM/x6+9XYPe6sAVu9HCVUdmjavSw+wzg+KWY3z1ZNqcvn4/qHz8burdKLDjAIVWieg+B2eaBL6pbAQXkghvZF/vOP15cn33i3Jb/j95BIKpi/6gdBIP/ZgcB29qGVmenzoWifQa5ZWV7YqJEQKgilm3TvJorAwUgECVStidGbjkU7TOrs1Pntra1rUb/X/fG4Y34H23E/wYmLAG0sI+J/wAAAABJRU5ErkJggg==","linkedin":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEIklEQVR4nMWWzY8UVRTFf+dVVXdPt9Mw4zh+YMgsQBMT1rOYBFZqYlwoOIHEIS6BHfwDDuEfgB26JBkSkybowrBwAQlhFho2BkP8IGYi4iCKzgfdPV1V710X1fNJNyBGvUml8qreu6fOqfvOu6JXTFpEQx6g+sGXL5Rx7wTsXSzshPAqFkAOcN8h95NDn3YIn7XOjd/dun5jqB/QwKEvXiqVt38IvK0o2YEFLHgI2fpclyAXgRzmszvA52ln4VT7kzd+6QXoNgFNTzsa8vXD1w6WKsPXldSOgO2wtBksawdCapvmh9QsawdLmwFsh5LakVJl+Hr98LWDNOSZnt6UX2v3SXM05LdPzZ6mVD1uPgOf5ogI9LACD4UZhicqxYoSSFtnFmYmTnQZBsAK5H1XIhry9amrp1UdOW5ZO8enASl+MiAACSnGp8Gydq7qyPH61NXTNOTZdyVaZRTRkN/2/tX3VK43LGtmYH8DpA9LlCupJdZZmlw8v/cCkxaJ6WlXnXtrNLFwA0XP4lND6mpt9KqhJ8QLRCVh/n4mt6c1dumeALZNzZ5VZeiorfyRF9KtKrOKGZ4WMFdlOLaVPz9anJk4ptrU7Gjs7AZKnivKelU+w3wGCEVJr0w8nrUZLgHLfsuD9rhItl9xbRSfWgFk4GJsZZkHl0/R+urj9aRmxYWBog2g/ULCp6a4NhrJ9scyHcCCIdddJbCA4jLl3W+iUq2b3KEo7gIbobOMkkoBGvL+LOUMCybTgRjZGMELM1coWMhjFvDL87hyHUUl8vs/sPLtJeKRVwjL8+T3bxFte5mBPZOoOtwf0MwRvJCNOeR2WchAG0pdgjwl+/k62a/fFHbUWSb//Xs6P15GSZVoaIxs/ms6c7MoKnXl7amkivxul8NC71kSKtVQMlCMXYwUkYy+RnX8COXdr6O4jK0sQPD9ZVxjGMwh13+WhU1fbJajyhCWr2wAeFSBbPx4J4eFW3IJWA8dpM1GoqJ4imdavz+SkVmRP9xymOZwkSFt2bmG5R3I03WWeWedkXXfbzxyejJSwEWGaU71w9eOuqR21tIHATm3xsBn+MXb4BKi7Tux9AF+6Q6uMowbfB5Lm/jF27jyIG7wxf4uYyGo9IwLWfNRDiIUF1VmPu3usxIW8oKNIhQlmAXw/dhtcZDmzMQ9gi4qGRTGhpPVsKxdSNWV0bJWVzZ1x+11mXti4ZUMiqCLzZmJe49x/X8QPVzfcfOkWufG7+KzY4pKQvL9d+iTIyF5RSXhs2Otc+N3uXlSrnuSxovn914I6dIZNzCSgPPFz3hKRjjvBkaSkC6dWTy/9wL7rsQ05P+HHgRstRtamJk4EbLmIeTmVRmKcUnhyrbFTtYAuu9cIlWGYuTmQ9Y8tDAzcWK1W6NrM/9p39hbnn+pI/4LiMp/+lzpDeAAAAAASUVORK5CYII="};
const editable=['nome','cargo','email','telefone','site','logradouro','numero','complemento','bairro','cidade','uf','cep','facebook','instagram','linkedin'];
const required=['nome','cargo','email','site','logradouro','numero','bairro','cidade','uf','cep','facebook','instagram','linkedin'];
const placeholders={nome:'[SEU NOME]',cargo:'[SEU CARGO]',email:'[SEU E-MAIL]'};
const container=document.getElementById('signature');
const state=document.getElementById('status');
const previewArea=document.getElementById('preview-area');
const el=id=>document.getElementById(id);
const value=id=>el(id).value.trim();
const txt=id=>value(id)||placeholders[id]||'';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const onlyDigits=s=>String(s).replace(/\D/g,'');
const EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function normalizedUrl(str,provider){
  const s=str.trim();if(!s)return '';
  if(s.startsWith('//')||/^[A-Za-z][A-Za-z0-9+.-]*:/.test(s)&&!/^https?:\/\//i.test(s))return '';
  const raw=/^https?:\/\//i.test(s)?s:'https://'+s;
  try{
    const url=new URL(raw);
    if(url.protocol!=='https:'||url.username||url.password||url.port||!url.hostname.includes('.')||/\s/.test(s))return '';
    if(!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(url.hostname))return '';
    if(provider){const hosts={facebook:'facebook.com',instagram:'instagram.com',linkedin:'linkedin.com'};
      const domain=hosts[provider];if(url.hostname!==domain&&!url.hostname.endsWith('.'+domain))return '';
    }
    return url.href;
  }catch(_){return '';}
}
function maskPhone(s){
  let d=onlyDigits(s).slice(0,11);
  if(!d)return '';
  if(d.length<=2)return '('+d+(d.length===2?') ':'');
  if(d.length<=6)return '('+d.slice(0,2)+') '+d.slice(2);
  const pos=d.length>10?7:6;
  return '('+d.slice(0,2)+') '+d.slice(2,pos)+'-'+d.slice(pos);
}
function maskCep(s){const d=onlyDigits(s).slice(0,8);return d.length>5?d.slice(0,5)+'-'+d.slice(5):d;}
function addressLines(){
  const line1=[value('logradouro'),value('numero'),value('complemento')].filter(Boolean).join(', ');
  const parts=[value('bairro')?'Bairro '+value('bairro'):'',
    [value('cidade'),value('uf')].filter(Boolean).join('/'),
    value('cep')?'CEP '+value('cep'):''].filter(Boolean);
  return [line1,parts.join(' · ')];
}
function fieldIssue(id){
  const v=value(id);
  if(!v)return required.includes(id)?'Campo obrigatório.':'';
  if(id==='email'&&(!EMAIL_RE.test(v)||!el(id).validity.valid))return 'Informe um e-mail válido.';
  if(id==='telefone'&&![10,11].includes(onlyDigits(v).length))return 'Informe DDD e telefone com 10 ou 11 dígitos.';
  if(id==='site'&&!normalizedUrl(v))return 'Informe um domínio ou URL HTTPS válida.';
  if(['facebook','instagram','linkedin'].includes(id)&&!normalizedUrl(v,id))return 'Informe uma URL HTTPS válida de '+id+'.';
  if(id==='cep'&&onlyDigits(v).length!==8)return 'Informe um CEP com 8 dígitos.';
  if(id==='uf'&&!/^[A-Za-z]{2}$/.test(v))return 'Informe a sigla do estado (2 letras).';
  return '';
}
function validateField(id,show){
  const issue=fieldIssue(id),input=el(id),error=el('error-'+id);
  if(show){input.setAttribute('aria-invalid',issue?'true':'false');error.textContent=issue;error.hidden=!issue;}
  return issue;
}
function validateAll(){
  const problems=editable.map(id=>({id,issue:validateField(id,true)})).filter(p=>p.issue);
  if(problems.length){
    state.classList.add('error');state.textContent='Corrija os campos destacados antes de copiar ou baixar a assinatura.';
    el(problems[0].id).focus();return false;
  }
  state.classList.remove('error');return true;
}
function linkHtml(content,url){return url?'<a href="'+esc(url)+'" style="color:inherit;text-decoration:none;">'+content+'</a>':content;}
function icon(id,last){
  const names={facebook:'Facebook',instagram:'Instagram',linkedin:'LinkedIn'};
  const image='<img src="'+IMG_FOLDER+'/'+id+'.png" alt="'+names[id]+'" width="27" height="27" style="display:block;width:27px;height:27px;border:0;outline:none;text-decoration:none;">';
  const link=normalizedUrl(value(id),id);
  return '<td style="padding:0 '+(last?0:8)+'px 0 0;">'+(link?'<a href="'+esc(link)+'" style="text-decoration:none;border:0;">'+image+'</a>':image)+'</td>';
}
function build(){
  const phone=value('telefone'), phoneDigits=onlyDigits(phone);
  const phoneRow=phone?'<tr><td style="font-size:12px;line-height:16px;padding:0;"><b>F:</b> '+linkHtml(esc(phone),[10,11].includes(phoneDigits.length)?'tel:+55'+phoneDigits:'')+'</td></tr>':'';
  const email=value('email');const emailHref=EMAIL_RE.test(email)?'mailto:'+email:'';
  const lines=addressLines();
  const address=lines.filter(Boolean).map(esc).join('<br>');
  // Sem background e sem cores fixas de texto: a assinatura herda a cor do Outlook.
  // O Outlook pode aplicar suas próprias inversões no modo escuro; o resultado varia por cliente.
  return `<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="504" style="border-collapse:collapse;width:504px;max-width:504px;font-family:Arial,Helvetica,sans-serif;mso-table-lspace:0pt;mso-table-rspace:0pt;">
<tr><td width="199" align="center" valign="middle" style="width:199px;padding:13px;border-right:1px solid #a8b4c2;vertical-align:middle;text-align:center;"><img src="${IMG_FOLDER}/logo.png" width="151" height="151" alt="GF Innovation" style="display:block;width:151px;height:151px;border:0;outline:none;text-decoration:none;"></td>
<td width="305" valign="middle" style="width:305px;padding:8px 10px 7px 25px;vertical-align:middle;"><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;font-family:Arial,Helvetica,sans-serif;">
<tr><td style="font-size:18px;font-weight:bold;line-height:21px;padding:0 0 2px 0;">${esc(txt('nome'))}</td></tr>
<tr><td style="font-size:12px;line-height:15px;padding:0 0 9px 0;">${esc(txt('cargo'))} | GF Innovation</td></tr>
${phoneRow}
<tr><td style="font-size:12px;line-height:16px;padding:0;"><b>@:</b> ${linkHtml(esc(txt('email')),emailHref)}</td></tr>
<tr><td style="font-size:12px;line-height:16px;font-weight:bold;padding:0 0 4px 0;">${linkHtml(esc(txt('site')),normalizedUrl(value('site')))}</td></tr>
<tr><td style="font-size:10px;line-height:13px;padding:0 0 10px 0;">${address}</td></tr>
<tr><td style="padding:0;"><table role="presentation" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;"><tr>${icon('facebook',false)}${icon('instagram',false)}${icon('linkedin',true)}</tr></table></td></tr>
</table></td></tr></table>`;
}
function redraw(){
  container.innerHTML=build();state.textContent='';state.classList.remove('error');
}
for(const id of editable){
  const input=el(id),field=input.closest('.field');
  const error=document.createElement('span');error.id='error-'+id;error.className='field-error';error.hidden=true;error.setAttribute('role','alert');
  input.setAttribute('aria-describedby',error.id);field.append(error);
  input.addEventListener('input',()=>{
    if(id==='telefone')input.value=maskPhone(input.value);
    if(id==='cep')input.value=maskCep(input.value);
    if(id==='uf')input.value=input.value.replace(/[^a-z]/gi,'').toUpperCase().slice(0,2);
    if(input.hasAttribute('aria-invalid'))validateField(id,true);
    redraw();
  });
  input.addEventListener('blur',()=>validateField(id,true));
}
function imageForTransfer(key){
  if(location.protocol==='https:'||location.protocol==='http:')return new URL(IMG_FOLDER+'/'+key+'.png',document.baseURI).href;
  return CLIPBOARD_IMAGES[key];
}
function richSignature(){
  return build().replace(/src="assets\/imagens\/(logo|facebook|instagram|linkedin)\.png"/g,
    (_match,key)=>'src="'+esc(imageForTransfer(key))+'"');
}
function plainSignature(){
  return [value('nome'),value('cargo')+' | GF Innovation',value('telefone'),value('email'),value('site'),...addressLines(),
    ...['facebook','instagram','linkedin'].map(k=>k+': '+value(k))].filter(Boolean).join('\n');
}
function selectForManualCopy(){
  const selection=window.getSelection(),range=document.createRange();
  range.selectNode(container.firstElementChild);selection.removeAllRanges();selection.addRange(range);
}
// Realiza uma cópia rica na mesma pilha de execução do clique. 
// Fallback necessário para navegadores que negam navigator.clipboard.write.
function synchronousRichCopy(){
  const html=richSignature(),plain=plainSignature();
  const holder=document.createElement('div');
  holder.style.cssText='position:fixed;left:-9999px;top:0;width:550px;';
  holder.setAttribute('contenteditable','true');holder.innerHTML=html;
  document.body.append(holder);
  const selection=window.getSelection(),range=document.createRange();
  range.selectNodeContents(holder);selection.removeAllRanges();selection.addRange(range);
  let clipboardEventHandled=false;
  const onCopy=event=>{
    if(!event.clipboardData)return;
    event.clipboardData.setData('text/html',html);
    event.clipboardData.setData('text/plain',plain);
    event.preventDefault();clipboardEventHandled=true;
  };
  document.addEventListener('copy',onCopy);
  let succeeded=false;
  try{succeeded=document.execCommand('copy')&&clipboardEventHandled;}catch(_error){}
  finally{document.removeEventListener('copy',onCopy);selection.removeAllRanges();holder.remove();}
  return succeeded;
}
function copySignature(){
  if(!validateAll())return;
  // A tentativa síncrona é imediata: a ativação do clique ainda está disponível.
  if(synchronousRichCopy()){
    state.textContent='Assinatura copiada com formatação. Cole no Outlook Web com Ctrl+V.';
    return;
  }
  // Alternativa moderna em contexto seguro, sem aguardar nenhum passo prévio.
  if(navigator.clipboard&&typeof navigator.clipboard.write==='function'&&typeof ClipboardItem!=='undefined'){
    const item=new ClipboardItem({
      'text/html':new Blob([richSignature()],{type:'text/html'}),
      'text/plain':new Blob([plainSignature()],{type:'text/plain'})
    });
    navigator.clipboard.write([item]).then(()=>{
      state.textContent='Assinatura copiada com formatação. Cole no Outlook Web com Ctrl+V.';
    }).catch(()=>{
      selectForManualCopy();state.classList.add('error');
      state.textContent='Cópia automática bloqueada. Assinatura selecionada: pressione Ctrl+C e cole no Outlook Web com Ctrl+V.';
    });
  }else{
    selectForManualCopy();state.classList.add('error');
    state.textContent='Cópia automática indisponível. Assinatura selecionada: pressione Ctrl+C e cole no Outlook Web com Ctrl+V.';
  }
}
el('selecionar').addEventListener('click',copySignature);
// Simulação local do fundo do e-mail. Não integra o HTML copiado ou exportado.
function setPreviewTheme(theme){
  previewArea.dataset.previewTheme=theme;
  for(const btn of document.querySelectorAll('[data-theme-choice]')){
    const selected=btn.dataset.themeChoice===theme;
    btn.setAttribute('aria-pressed',String(selected));
  }
}
for(const btn of document.querySelectorAll('[data-theme-choice]')){
  btn.addEventListener('click',()=>setPreviewTheme(btn.dataset.themeChoice));
}
setPreviewTheme(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
function downloadableHtml(){
  const signature=richSignature();
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Assinatura GF Innovation | Copiar para Outlook Web</title>
<style>*{box-sizing:border-box}body{margin:0;font:14px Arial,sans-serif;color:#182c43;background:#f2f5f9}.container{max-width:780px;margin:35px auto;padding:24px}.help{background:white;border:1px solid #d2dfec;border-radius:10px;padding:20px;margin-bottom:24px;line-height:1.6}.help h1{font-size:20px;margin:0 0 12px}.help p{margin:7px 0}.help button{padding:11px 17px;border:0;border-radius:6px;background:#076ed1;color:#fff;font-weight:bold;cursor:pointer}.signature-wrapper{background:#fff;border:1px solid #d2dfec;border-radius:10px;padding:24px 16px;overflow:auto}#signature-content{width:max-content;margin:auto}.note{font-size:12px;color:#586b7c;margin:14px 0 0}</style>
</head><body><main class="container"><div class="help"><h1>Como inserir esta assinatura no Outlook Web</h1><p>Este HTML é uma <strong>alternativa para copiar a assinatura formatada</strong>, caso o botão de cópia direta do editor não funcione. Não é um arquivo para importar no Outlook. O fundo é transparente e a cor dos textos é definida pelo Outlook, conforme o tema; a adaptação não é idêntica em todos os clientes.</p><p>1. Clique em <strong>Selecionar assinatura</strong>. 2. Pressione <strong>Ctrl+C</strong>. 3. No Outlook Web, acesse <strong>Configurações → Contas → Assinaturas</strong>, crie ou edite sua assinatura e cole com <strong>Ctrl+V</strong>. 4. Salve e envie um e-mail de teste.</p><button id="select-signature" type="button">Selecionar assinatura</button><p class="note">As instruções não são incluídas na seleção.</p></div>
<div class="signature-wrapper"><div id="signature-content">${signature}</div></div></main>
<script>document.getElementById('select-signature').addEventListener('click',function(){const node=document.getElementById('signature-content').firstElementChild;const range=document.createRange();range.selectNode(node);const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);});<`+`/script></body></html>`;
}
el('download').addEventListener('click',()=>{
  if(!validateAll())return;
  const blob=new Blob([downloadableHtml()],{type:'text/html;charset=utf-8'}),url=URL.createObjectURL(blob);
  const link=document.createElement('a');link.href=url;link.download='Assinatura_GF_Profissional.html';
  document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);
  state.textContent='HTML gerado. Abra o arquivo, clique em Selecionar assinatura, use Ctrl+C e cole no Outlook Web com Ctrl+V.';
});
redraw();
})();
