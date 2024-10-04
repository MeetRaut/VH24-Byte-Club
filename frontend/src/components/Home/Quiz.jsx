import { quiz_illustration } from "../../assets/home";
import Container from "../Container";

const EmpowerChangeSection = () => {
  return (
    <section className="my-14">
      <Container>
        <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[40px] text-[40px] text-white pb-8">
              Empower Change: Join Us in Supporting Those in Need!
            </h1>
            <button className="capitalize bg-button-primary hover:bg-button-primary-hover transition-colors px-14 py-3 rounded-sm font-bold text-[#6C6252]">
              Lets start
            </button>
          </article>
          <div className="absolute lg:right-[10%] right-[4%] lg:-top-[10%] -top-[5%] md:block hidden">
            <img src={quiz_illustration} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default EmpowerChangeSection;
