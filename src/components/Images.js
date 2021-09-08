import Gallery from "react-photo-gallery";

 
const photos = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vgLsyVNFjfWOpIBcY6dcruGwKPgpg80q2g&usqp=CAU',
      width: 5,
      height: 5,
      class: "scale"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_-HjnJGsI4uMyc4M0hmaZh8w2DJPO2lcaAqPoHfyM15Pk1kdjWXI1EwLJb-rGii9ZDQ&usqp=CAU',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Y5gMNG0yK9QzifMxgOYspKnvJktf_hchmHC8y0U-7BViXfasqcxs-Iqhms0W7x7mDQ8&usqp=CAU',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vgLsyVNFjfWOpIBcY6dcruGwKPgpg80q2g&usqp=CAU',
      width: 4,
      height: 3,
      class: "scale"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_-HjnJGsI4uMyc4M0hmaZh8w2DJPO2lcaAqPoHfyM15Pk1kdjWXI1EwLJb-rGii9ZDQ&usqp=CAU',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Y5gMNG0yK9QzifMxgOYspKnvJktf_hchmHC8y0U-7BViXfasqcxs-Iqhms0W7x7mDQ8&usqp=CAU',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU',
      width: 1,
      height: 1,
      class: "scale"
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1,
      class: "scale"
    },
  ];

const Images = () => {

    return(
      <div>
        <Gallery photos={photos} />;
      </div>
    )
}

export default Images