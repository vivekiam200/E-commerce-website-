import s from "./ProductPreview.module.scss";

const ProductPreview = ({ data }) => {
  const { img, name, otherImages } = data;
  const hasOtherImages = otherImages?.length !== 0 && otherImages;

  return (
    <section className={s.images}>
      {hasOtherImages && (
        <div className={s.otherImages}>
          {otherImages.map((img, i) => (
            <div key={i} className={s.imgHolder}>
              <img src={img} alt="product's image" />
            </div>
          ))}
        </div>
      )}

      <div className={s.previewImgHolder}>
        <img src={img} alt={name} />
      </div>
    </section>
  );
};
export default ProductPreview;