import {useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ShopSecurity = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="shop-security-section mt-5 mb-5">
      <h3 className="mb-2 text-center">Keep your shop Safe</h3>
      <p className="mb-3 faint">
        Running an online shop comes with certain risks - your account could be
        compromised or your products copied. That's why we provide tools to help
        keep your shop secure. Enable these optional security features for
        greater protection:
      </p>
      <ul className="mb-3 faint">
        <li>
          Two-factor authentication - Require an authentication code from your
          phone or email when logging in from a new device. Adds an extra layer
          of account security.
        </li>
        <li>
          - Custom watermarking - Automatically add a semi-transparent watermark
          with your shop's logo to all product images. Makes it harder for
          others to copy your images.
        </li>
        <li>
          - Shop insurance - Optional ShopProtect insurance starts at
          $9.99/month. Covers up to $20,000 in damages from account compromise,
          fraudulent orders, DMCA violations and more. The ultimate peace of
          mind
        </li>
      </ul>
      <p className="mb-5">
        Please enable any or all of these optional features to better secure
        your online shop from harm. We take the safety of your shop seriously
        and are here to help in any way we can. Contact us at
        support@shopsite.com with any security questions or concerns.
      </p>
    </div>
    <div className="justify-between m-2 shop-buttons mt-5">
        <Button color="#E04F16" background="#fff" text="Cancel" />
        <Button text="Continue" handleClick={() => navigate('/product')}/>
      </div>
    </>
  );
};

export default ShopSecurity;
