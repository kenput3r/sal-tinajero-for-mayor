import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useAppContext } from '@components/Context/AppContext';
import profilePhoto from '@images/st-profile-photo.png';
import logo from '@images/sal-tinajero-for-mayor.png';

const AboutSal: NextPage = () => {
  const { language } = useAppContext();
  return (
    <div>
      <h1 className="text-center">
        <div className="max-w-xs rounded-full overflow-hidden mx-auto leading-[0]">
          <Image src={profilePhoto} alt="Sal Tinajero" />
        </div>
        <div>
          <Image src={logo} alt="Sal Tinajero For Mayor" />
        </div>
      </h1>
      <section className="text-white max-w-3xl mx-auto px-1.5">
        {language === 'english' ? (
          <>
            <p className="mb-3">
              My name is Salvador “Sal” Tinajero and I am running to be the next Mayor in Santa Ana.
              I am a son of immigrants and was born and raised in Santa Ana. I went to our local
              schools and after attending college at Bradley University in Peoria, IL, earning a
              Bachelor of Arts in Speech Communication, and then a Master of Arts in Cross Cultural
              Education from National University in San Diego, California, I came back to the city I
              love to start a family with my wife Jennifer and raise my three beautiful children who
              also attended our public schools.
            </p>

            <p className="mb-3">
              I currently serve as Trustee of the Rancho Santiago Community College District, but
              for twelve years, I served as a Santa Ana city council member and two of those years
              as Mayor Pro Tem. I am proud of the work I did alongside our current Mayor Vicente
              Sarmiento. I was elected as part of a wave of new leadership in our city called the
              “Santa Ana Spring” that brought a seismic change to business as usual at city hall. My
              newly elected colleagues and I were successful in breaking the stranglehold that
              special interests had in our city and helped promote government transparency and
              openness through the passing of the Sunshine Ordinance, our inclusionary housing
              policy called the Housing Opportunity Ordinance, and we supported the implementation
              of district elections and revised term limits that allowed for new leadership after 26
              years under the same mayor.
            </p>

            <p className="mb-3">
              I also voted in support of efforts to fly the pride flag at city hall and create
              “Harvey Milk Day”, voted to pass a resolution declaring us a sanctuary city for
              immigrants, and supported the legalization of cannabis that has generated millions in
              tax revenue.
            </p>

            <p className="mb-3">
              Mayor Vicente Sarmiento did an amazing job leading our city during the pandemic and
              leaves us with a current budget surplus while other cities are facing bankruptcy and
              tough decisions. I am sure he will do great things for us as our next County
              Supervisor. But I promise you that as your next Mayor, I plan to support the
              common-sense solutions that he and his council allies brought since their election in
              2020. We will invest in youth, invest in healthcare, support progressive principles,
              rethink public safety, and increase prosperity in our city.
            </p>
          </>
        ) : (
          <>
            <p className="mb-3">
              Mi nombre es Salvador “Sal” Tinajero y estoy postulandome para ser el próximo alcalde
              de Santa Ana. Soy hijo de inmigrantes y nací y crecí en Santa Ana. Fui a nuestras
              escuelas locales y después de asistir a la universidad de Bradley University en
              Peoria, IL, obtuve una Licenciatura en Comunicación del Habla y luego una Maestría en
              Educación Intercultural de la Universidad Nacional en San Diego, California, regresé a
              la ciudad que amo para formar una familia con mi esposa Jennifer y criar a mis tres
              hermosos hijos que también asistieron a nuestras escuelas públicas.
            </p>

            <p className="mb-3">
              Actualmente sirvo como Síndico del Distrito de Colegios Comunitarios de Rancho
              Santiago, pero durante doce años, serví como miembro del consejo de la ciudad de Santa
              Ana y dos de esos años como Alcalde Interino/Mayor Pro Tem. Estoy orgulloso del
              trabajo que realicé junto a nuestro actual alcalde Vicente Sarmiento. Fui elegido como
              parte de una ola de nuevo liderazgo en nuestra ciudad llamada &quote;Primavera de
              Santa Ana&quote; que trajo un cambio radical a los negocios habituales en el
              ayuntamiento. Mis colegas recién elegidos y yo logramos romper el dominio que los
              intereses especiales tenían en nuestra ciudad y ayudamos a promover la transparencia y
              apertura del gobierno mediante la aprobación de la Ordenanza Sunshine, nuestra
              política de vivienda inclusiva llamada Ordenanza de Oportunidades de Vivienda, y
              apoyamos la implementación de elecciones distritales y límites de mandato revisados
              que permitieron un nuevo liderazgo después de 26 años bajo el mismo alcalde.
            </p>

            <p className="mb-3">
              También voté a favor de los esfuerzos para enarbolar la bandera del orgullo en el
              ayuntamiento y crear el “Día de Harvey Milk”, voté para aprobar una resolución que nos
              declara una ciudad santuario para los inmigrantes y apoyé la legalización del cannabis
              que ha generado millones en ingresos fiscales.
            </p>

            <p className="mb-3">
              El alcalde Vicente Sarmiento hizo un trabajo increíble al liderar nuestra ciudad
              durante la pandemia y nos deja con un superávit presupuestario actual mientras que
              otras ciudades enfrentan la bancarrota y decisiones difíciles. Estoy seguro de que
              hará grandes cosas por nosotros como nuestro próximo Supervisor del Condado. Pero les
              prometo que, como su próximo alcalde, planeo apoyar las soluciones de sentido común
              que él y sus aliados del consejo aportaron desde su elección en 2020. Invertiremos en
              la juventud, invertiremos en atención médica, apoyaremos los principios progresistas,
              repensaremos la seguridad pública, y aumentaremos la prosperidad en nuestra ciudad.
            </p>
          </>
        )}
      </section>
    </div>
  );
};

export default AboutSal;
