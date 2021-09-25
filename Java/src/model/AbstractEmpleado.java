package model;

import excepcionCustom.SueldoException;

public abstract class AbstractEmpleado implements IActualizarSueldo {
	private String nombre;
	private String dni;
	private String localidad;
	protected double sueldo;
	
	public AbstractEmpleado(String nombre, String dni, String localidad, double sueldo) throws SueldoException {
		super();
		this.nombre = nombre;
		this.dni = dni;
		this.localidad = localidad;
		
		if(sueldo>0) {
			this.sueldo=sueldo;
		}else {
			throw new SueldoException();
		}
		
	}

	public String getNombre() {
		return nombre;
	}

	public String getDni() {
		return dni;
	}

	public String getLocalidad() {
		return localidad;
	}

	public double getSueldo() {
		return sueldo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dni == null) ? 0 : dni.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AbstractEmpleado other = (AbstractEmpleado) obj;
		if (dni == null) {
			if (other.dni != null)
				return false;
		} else if (!dni.equals(other.dni))
			return false;
		return true;
	}

	@Override
	public String toString() {
		
		return "Nombre: "+this.getNombre()+" , DNI: "+this.getDni()+" , Localidad: "+this.getLocalidad();
	}
	
	
	
	
	
}
