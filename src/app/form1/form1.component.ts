import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class Form1Component {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    nombres: [null, Validators.required],
    apellidos: [null, Validators.required],
    edad: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(3)])
    ],
    genero: [null, Validators.required],
    colegio: [null, Validators.required],
    curso: [null, Validators.required],
    bachillerato: [null, Validators.required],
    pregunta1: [null, Validators.required],
    pregunta2: [null, Validators.required],
    pregunta3: [null, Validators.required],
    pregunta4: [null, Validators.required],
    pregunta5: [null, Validators.required],
    pregunta6: [null, Validators.required],
    pregunta7: [null, Validators.required],
    pregunta8: [null, Validators.required],
    pregunta9: [null, Validators.required],
    pregunta10: [null, Validators.required],
    pregunta11: [null, Validators.required],
    pregunta12: [null, Validators.required],
    pregunta13: [null, Validators.required],
    pregunta14: [null, Validators.required],
    pregunta15: [null, Validators.required],
    pregunta16: [null, Validators.required],
    pregunta17: [null, Validators.required],
    pregunta18: [null, Validators.required],
    pregunta19: [null, Validators.required],
    pregunta20: [null, Validators.required],
    pregunta21: [null, Validators.required],
    pregunta22: [null, Validators.required],
    pregunta23: [null, Validators.required],
    pregunta24: [null, Validators.required],
    pregunta25: [null, Validators.required],
    pregunta26: [null, Validators.required],
    pregunta27: [null, Validators.required],
    pregunta28: [null, Validators.required],
    pregunta29: [null, Validators.required],
    pregunta30: [null, Validators.required],
    pregunta31: [null, Validators.required],
    pregunta32: [null, Validators.required],
    pregunta33: [null, Validators.required],
    pregunta34: [null, Validators.required],
    pregunta35: [null, Validators.required],
    pregunta36: [null, Validators.required],
    pregunta37: [null, Validators.required],
    pregunta38: [null, Validators.required],
    pregunta39: [null, Validators.required],
    pregunta40: [null, Validators.required],
    pregunta41: [null, Validators.required],
    pregunta42: [null, Validators.required],
    pregunta43: [null, Validators.required],
    pregunta44: [null, Validators.required],
    pregunta45: [null, Validators.required],
    pregunta46: [null, Validators.required],
    pregunta47: [null, Validators.required],
    pregunta48: [null, Validators.required],
    pregunta49: [null, Validators.required],
    pregunta50: [null, Validators.required],
    pregunta51: [null, Validators.required],
    pregunta52: [null, Validators.required],
    pregunta53: [null, Validators.required],
    pregunta54: [null, Validators.required],
    pregunta55: [null, Validators.required],
    pregunta56: [null, Validators.required],
    pregunta57: [null, Validators.required],
    pregunta58: [null, Validators.required],
    pregunta59: [null, Validators.required],
    pregunta60: [null, Validators.required],
    pregunta61: [null, Validators.required],
    pregunta62: [null, Validators.required],
    pregunta63: [null, Validators.required],
    pregunta64: [null, Validators.required],
    pregunta65: [null, Validators.required],
    pregunta66: [null, Validators.required],
    pregunta67: [null, Validators.required],
    pregunta68: [null, Validators.required],
    pregunta69: [null, Validators.required],
    pregunta70: [null, Validators.required],
    pregunta71: [null, Validators.required],
    pregunta72: [null, Validators.required],
    pregunta73: [null, Validators.required],
    pregunta74: [null, Validators.required],
    pregunta75: [null, Validators.required],
    pregunta76: [null, Validators.required],
    pregunta77: [null, Validators.required],
    pregunta78: [null, Validators.required],
    pregunta79: [null, Validators.required],
    pregunta80: [null, Validators.required],
    pregunta81: [null, Validators.required],
    pregunta82: [null, Validators.required],
    pregunta83: [null, Validators.required],
    pregunta84: [null, Validators.required],
    pregunta85: [null, Validators.required],
    pregunta86: [null, Validators.required],
    pregunta87: [null, Validators.required],
    pregunta88: [null, Validators.required],
    pregunta89: [null, Validators.required],
    pregunta90: [null, Validators.required],
    pregunta91: [null, Validators.required],
    pregunta92: [null, Validators.required],
    pregunta93: [null, Validators.required],
    pregunta94: [null, Validators.required],
    pregunta95: [null, Validators.required],
    pregunta96: [null, Validators.required],
    pregunta97: [null, Validators.required],
    pregunta98: [null, Validators.required],
    pregunta99: [null, Validators.required],
    pregunta100: [null, Validators.required]
  });

  preguntas: Array<string> = [
    'Para mí es importante recibir la aprobación de los demás.',
    'Odio equivocarme en algo.',
    'La gente que se equivoca, tiene lo que se merece.',
    'Generalmente, acepto los acontecimientos con filosofía.',
    'Si una persona quiere, puede ser feliz en casi cualquier circunstancia.',
    'Temo a las cosas que, a menudo, me resultan objeto de preocupación.',
    'Normalmente, aplazo las decisiones importantes.',
    'Todo el mundo necesita de alguien a quien recurrir en busca de ayuda y consejo.',
    '“Una cebra no puede cambiar sus rayas”.',
    'Prefiero sobre todas las cosas, pasar el tiempo libre de una forma tranquila.',
    'Me gusta que los demás me respeten, pero yo no tengo por qué manifestar respeto a nadie.',
    'Evito las cosas que no puedo hacer bien.',
    'Hay demasiadas personas malas que quedan impunes',
    'Las frustraciones me distorsionan',
    'A la gente no le trastorna los acontecimientos sino la imagen que tiene de ellos',
    'Me produce poca ansiedad los peligros inesperados o los acontecimientos futuros',
    'Trato de afrontar los trabajos fastidiosos y hacerlo cuanto antes',
    'En las decisiones importantes, consulto con una autoridad al respecto.',
    'Es casi imposible superar la influencia del pasado',
    'Me gusta disponer de muchos recursos.',
    'Quiero gustar a todo el mundo',
    'No me gusta competir en aquellas actividades en las que los demás son mejores que yo.',
    'Aquellos que se equivocan merecen cargar con la culpa.',
    'Las cosas deberían ser distintas a como son.',
    'Yo provoco mi propio mal humor.',
    'A menudo, no puedo quitarme algún asunto de la cabeza',
    'Evito enfrentarme a los problemas',
    'Todo el mundo necesita tener fuera de sí mismo una fuente de energía',
    'Sólo porque una vez algo afectó mi vida de forma importante, no quiere decir que sea igual en el futuro',
    'Me siento más satisfecho cuando tengo muchas cosas que hacer',
    'Puedo gustarme a mí mismo, aun cuando no guste a los demás.',
    'Me gustaría triunfar en algo, pero no pienso que deba hacerlo.',
    'La inmoralidad debería castigarse severamente.',
    'A menudo me siento trastornado por situaciones que no me gustan.',
    'El estado de las personas, desgraciadamente, normalmente se debe a sí mismas.',
    'No me preocupo por no poder evitar que algo ocurra.',
    'Normalmente, tomo las decisiones tan pronto como puedo.',
    'Hay determinadas personas de las que dependo mucho.',
    'La gente sobrevalora la influencia del pasado.',
    'Lo que más me divierte es realizar algún proyecto creativo.',
    'Si no gusto a los demás, es su problema, no el mío.',
    'Para mí es muy importante alcanzar el éxito en todo lo que hago.',
    'Yo pocas veces culpo a la gente por sus errores.',
    'Normalmente, acepto las cosas como son, aunque no me gusten.',
    'Nadie está mucho tiempo de mal humor o enfadado, a menos que quiera estarlo.',
    'No puedo soportar correr riesgos.',
    'La vida es demasiado corta para pasarla haciendo cosas que a uno no le gustan.',
    'Me gusta valerme por mí mismo',
    'Si hubiera vivido experiencias distintas, podría ser más cómo me gustaría ser.',
    'Me gustaría jubilarme y apartarme totalmente del trabajo.',
    'Pienso que es duro ir en contra de lo que piensan los demás.',
    'Disfruto de las actividades por sí mismas, al margen de lo bueno o malo que sean ellas.',
    'El miedo al castigo es lo que hace a la gente ser buena.',
    'Si las cosas me desagradan, opto por ignorarlas.',
    'Cuanto más problemas tiene una persona, menos feliz es.',
    'Raramente me siento ansioso al pensar en el futuro.',
    'Raramente aplazo las cosas.',
    'Yo soy el único que realmente puede entender y solucionar mis problemas.',
    'Normalmente, no pienso que las experiencias pasadas me afecten en la actualidad.',
    'Tener demasiado tiempo libre, resulta aburrido.',
    'Aunque me gusta recibir la aprobación de los demás, no tengo necesidad real de ello.',
    'Me fastidia que los demás sean mejores que yo en algo.',
    'Todo el mundo es, esencialmente, bueno.',
    'Hago todo lo que puedo por conseguir lo que quiero y una vez conseguido, deja de preocuparme.',
    'Nada es intrínsecamente perturbador, si lo es, se debe al modo en que lo interpretamos.',
    'Me preocupan mucho determinadas cosas del futuro.',
    'Me resulta difícil hacer las tareas desagradables.',
    'Me desagrada que los demás tomen decisiones por mí.',
    'Somos esclavos de nuestro pasado.',
    'A veces desearía poder irme a una isla tropical y tenderme en la playa, sin hacer nada más.',
    'A menudo me preocupa que la gente me apruebe y me acepte.',
    'Me trastorna cometer errores.',
    'No es equitativo que “llueva igual sobre el justo que sobre el injusto”.',
    'Yo disfruto honradamente de la vida.',
    'Debería haber más personas que afrontaran lo desagradable de la vida.',
    'Algunas veces me resulta imposible apartar de mi mente el miedo a algo.',
    'Una vida fácil, muy pocas veces resulta compensadora.',
    'Pienso que es fácil buscar ayuda.',
    'Una vez que algo afecta tu vida de forma importante, seguirá haciéndolo siempre.',
    'Me encanta estar tumbado.',
    'Tengo considerable preocupación por lo que la gente piensa de mí.',
    'Muchas veces me enfado muchísimo por cosas sin importancia.',
    'Generalmente, doy una segunda oportunidad a quien se equivoca.',
    'La gente es más feliz cuando tiene metas y problemas que resolver.',
    'Nunca hay razón para permanecer afligido por mucho tiempo',
    'Raramente pienso en cosas como la muerte o la guerra nuclear.',
    'No me gustan las responsabilidades.',
    'No me gusta depender de los demás.',
    'Básicamente, la gente nunca cambia.',
    'La mayoría de las personas trabajan demasiado y no toman el suficiente descanso.',
    'Ser criticado es algo fastidioso pero no perturbador.',
    'No me asusta hacer aquellas cosas que no hago del todo bien.',
    'Nadie es malo a pesar de que sus actos lo sean.',
    'Raramente me importunan los errores de los demás.',
    'El hombre construye su propio infierno interior.',
    'Muchas veces me sorprendo planeando lo que haría si me encontrara en determinadas situaciones de peligro.',
    'Si tengo que hacer algo, lo hago a pesar de que no sea agradable',
    'He aprendido a no estar pendiente de nada que no esté relacionado con mi bienestar.',
    'No miro atrás con resentimiento.',
    'No me siento realmente contento hasta que no estoy relajado.',
  ];

  constructor() { }

  getId(id: number): string {
    return `pregunta${(id+1)}`;
  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    alert('Thanks!');
  }
}
