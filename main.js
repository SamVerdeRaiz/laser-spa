document.getElementById('formulario-cita').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const servicio = document.getElementById('servicio').value.trim();
  const fecha = document.getElementById('fecha').value;

  const mensaje = `Hola, soy ${nombre}. Quiero agendar una cita para ${servicio} el día ${fecha}.`;
  const telefono = '525544769058'; // Cámbialo si es necesario

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
});
