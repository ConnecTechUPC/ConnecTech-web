import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarCustomerComponent } from "../../../shared/components/navbar-customer/navbar-customer.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-voting',
  standalone: true,
  imports: [CommonModule, NavbarCustomerComponent, FooterComponent, FormsModule],
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})

export class VotingComponent  {
  calificacion: number = 0;
  comentario: string = '';
  currentIndex = 0;

  testimonios = [
    { texto: 'Excelente evento, aprendí mucho sobre desarrollo web.', autor: 'Juan Pérez', calificacion: 5 },
    { texto: 'Muy buen taller, los ponentes fueron claros y atentos.', autor: 'María González', calificacion: 4 },
    { texto: 'Me gustó el taller, aunque hubiera preferido más práctica.', autor: 'Luis Martínez', calificacion: 3 },
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonios.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonios.length) % this.testimonios.length;
  }


  cambiarColor(valor: number) {
    this.calificacion = valor;
  }

  seleccionarCalificacion(valor: number) {
    this.calificacion = valor;
  }

  enviarComentarios() {
    if (this.calificacion > 0 && this.comentario) {
      console.log("Calificación:", this.calificacion);
      console.log("Comentario:", this.comentario);

      const mensaje = document.getElementById("mensaje");
      if (mensaje) {
        mensaje.style.display = "block";
      }

      this.comentario = '';
      this.calificacion = 0;
    } else {
      alert("Por favor, selecciona una calificación y escribe un comentario.");
    }
  }
}
