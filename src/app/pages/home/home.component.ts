import { Component } from '@angular/core';
import { NavbarHomeComponent } from "../../shared/components/navbar-home/navbar-home.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarHomeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faqs = [
    { question: '¿Cómo me registro en la plataforma?', answer: 'Para registrarte, haz clic en "Registrarse" en la parte superior y completa el formulario.', showAnswer: false },
    { question: '¿Cuáles son los métodos de pago disponibles?', answer: 'Aceptamos pagos con tarjeta de crédito, débito, Yape, Plin.', showAnswer: false },
    { question: '¿Qué tipo de eventos tecnológicos organiza la plataforma?', answer: 'La plataforma organiza conferencias, talleres, hackatones enfocadas en innovación y desarrollo tecnológico.', showAnswer: false },
    { question: '¿Cómo se seleccionan los ponentes para los eventos?', answer: 'Los ponentes son seleccionados en función de su experiencia en la industria, sus contribuciones al campo y su capacidad para ofrecer contenido relevante y atractivo.', showAnswer: false },
    { question: '¿La plataforma ofrece oportunidades de networking durante los eventos?', answer: 'Sí, los eventos incluyen sesiones de networking, permitiendo a los participantes conectarse y compartir ideas.', showAnswer: false }
  ];

  toggleAnswer(faq: any) {
    faq.showAnswer = !faq.showAnswer;
  }
}

